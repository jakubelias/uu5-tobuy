package uu.demoapp.main.model;

import javax.inject.Inject;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import uu.app.validation.ValidationResult;
import uu.app.validation.Validator;
import uu.app.validation.utils.ValidationResultUtils;
import uu.demoapp.main.dao.AddressDao;
import uu.demoapp.main.domain.Address;
import uu.demoapp.main.dto.AddressDtoOut;
import uu.demoapp.main.dto.CreateAddressDtoIn;
import uu.demoapp.main.dto.FindAddressDtoIn;
import uu.demoapp.main.exceptions.DemoRuntimeException;
import uu.demoapp.main.exceptions.DemoRuntimeException.Error;

/**
 * Model containing uuAppObjectStore usage sample.
 */
@Component
public final class AddressModel {

  @Inject
  private Validator validator;

  @Inject
  private AddressDao addressDao;

  @Inject
  private ModelMapper modelMapper;

  /**
   * Stores address into uuAppObjectStore.
   *
   * @param awid awid
   * @param dtoIn DTO in containing address information.
   * @return DTO out containing data of stored object.
   */
  public AddressDtoOut create(String awid, CreateAddressDtoIn dtoIn) {
    ValidationResult validationResult = validator.validate(dtoIn);
    if (!validationResult.isValid()) {
      throw new DemoRuntimeException(Error.INVALID_DTO_IN, "dtoIn is not valid.", ValidationResultUtils.validationResultToAppErrorMap(validationResult));
    }

    Address address = convertToEntity(awid, dtoIn);
    addressDao.create(address);
    AddressDtoOut dtoOut = convertToDto(address);

    return dtoOut;
  }

  /**
   * Finds address in uuAppObjectStore.
   *
   * @param awid awid
   * @param dtoIn DTO in containing search attributes.
   * @return DTO out containing data of stored object.
   */
  public AddressDtoOut find(String awid, FindAddressDtoIn dtoIn) {
    ValidationResult validationResult = validator.validate(dtoIn);
    if (!validationResult.isValid()) {
      throw new DemoRuntimeException(Error.INVALID_DTO_IN, "dtoIn is not valid.", ValidationResultUtils.validationResultToAppErrorMap(validationResult));
    }

    Address address = addressDao.findByStreet(awid, dtoIn.getStreet());

    AddressDtoOut dtoOut;
    if (address != null) {
      dtoOut = convertToDto(address);
    } else {
      dtoOut = new AddressDtoOut();
    }
    return dtoOut;
  }

  private AddressDtoOut convertToDto(Address address) {
    AddressDtoOut addressDto = modelMapper.map(address, AddressDtoOut.class);
    return addressDto;
  }

  private Address convertToEntity(String awid, CreateAddressDtoIn createAddressDtoIn) {
    Address address = modelMapper.map(createAddressDtoIn, Address.class);
    address.setAwid(awid);
    return address;
  }
}
