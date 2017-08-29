package uu.demoapp.main.model;

import java.io.IOException;
import javax.inject.Inject;
import org.modelmapper.ModelMapper;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import uu.app.binarystore.dao.BinaryData;
import uu.app.binarystore.exceptions.BinaryStoreIdentityRuntimeException;
import uu.app.binarystore.exceptions.BinaryStoreUnexpectedRuntimeException;
import uu.app.server.dto.ContentDisposition;
import uu.app.server.dto.ContentDispositionType;
import uu.app.server.dto.DownloadableResourceDtoOut;
import uu.app.validation.ValidationResult;
import uu.app.validation.Validator;
import uu.app.validation.utils.ValidationResultUtils;
import uu.demoapp.main.dao.ImageDao;
import uu.demoapp.main.domain.Image;
import uu.demoapp.main.dto.CreateImageDtoIn;
import uu.demoapp.main.dto.GetImageDtoIn;
import uu.demoapp.main.dto.ImageDtoOut;
import uu.demoapp.main.exceptions.DemoRuntimeException;

/**
 * Model containing uuAppBinaryStore usage sample.
 */
@Component
public final class ImageModel {

  @Inject
  private Validator validator;

  @Inject
  private ImageDao imageDao;

  @Inject
  private ModelMapper modelMapper;

  /**
   * Stores image into uuAppBinaryStore.
   *
   * @param awid awid
   * @param dtoIn DTO in containing image information.
   * @return DTO out containing data of stored image.
   */
  public ImageDtoOut createImage(String awid, CreateImageDtoIn dtoIn) {
    ValidationResult validationResult = validator.validate(dtoIn);
    if (!validationResult.isValid()) {
      throw new DemoRuntimeException(DemoRuntimeException.Error.INVALID_DTO_IN, "dtoIn is not valid.", ValidationResultUtils.validationResultToAppErrorMap(validationResult));
    }

    Image image = convertToEntity(awid, dtoIn);
    try {
      image = imageDao.create(image, dtoIn.getData().getInputStream());
    } catch (IOException | BinaryStoreUnexpectedRuntimeException e) {
      throw new DemoRuntimeException(DemoRuntimeException.Error.IMAGE_CREATE_FAILED, "Create image failed.", e);
    }

    return convertToDto(image);
  }

  /**
   * Retrieves image data from uuAppBinaryStore.
   *
   * @param awid awid
   * @param dtoIn DTO in containing search attributes.
   * @return Streamed image data.
   */
  public DownloadableResourceDtoOut getImageData(String awid, GetImageDtoIn dtoIn) {
    ValidationResult validationResult = validator.validate(dtoIn);
    if (!validationResult.isValid()) {
      throw new DemoRuntimeException(DemoRuntimeException.Error.INVALID_DTO_IN, "dtoIn is not valid.", ValidationResultUtils.validationResultToAppErrorMap(validationResult));
    }

    BinaryData binaryData = null;
    try {
      binaryData = imageDao.getDataByCode(awid, dtoIn.getCode());
    } catch (BinaryStoreUnexpectedRuntimeException | BinaryStoreIdentityRuntimeException e) {
      throw new DemoRuntimeException(DemoRuntimeException.Error.IMAGE_DOES_NOT_EXIST, "Image does not exist.", e);
    }

    return convertToDownloadableDtoOut(binaryData, dtoIn.getContentDisposition());
  }

  private ImageDtoOut convertToDto(Image image) {
    ImageDtoOut imageDto = modelMapper.map(image, ImageDtoOut.class);
    return imageDto;
  }

  private Image convertToEntity(String awid, CreateImageDtoIn dtoIn) {
    Image image = modelMapper.map(dtoIn, Image.class);

    image.setAwid(awid);
    if (StringUtils.isEmpty(image.getFilename())) {
      image.setFilename(dtoIn.getData().getOriginalFilename());
    }
    if (StringUtils.isEmpty(image.getContentType())) {
      image.setContentType(dtoIn.getData().getContentType());
    }

    return image;
  }

  private DownloadableResourceDtoOut convertToDownloadableDtoOut(BinaryData binaryData, String contentDisposition) {
    ContentDispositionType type = ContentDispositionType.INLINE.asText().equals(contentDisposition) ? ContentDispositionType.INLINE : ContentDispositionType.ATTACHMENT;

    return new DownloadableResourceDtoOut(new InputStreamResource(binaryData.getInputStream()),
        new ContentDisposition(type, null, binaryData.getFilename()),
        binaryData.getSize(),
        MediaType.parseMediaType(binaryData.getContentType()));
  }
}
