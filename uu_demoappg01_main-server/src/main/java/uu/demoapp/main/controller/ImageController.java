package uu.demoapp.main.controller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import javax.inject.Inject;
import org.springframework.http.MediaType;
import uu.app.server.CommandContext;
import uu.app.server.annotation.Command;
import uu.app.server.annotation.CommandController;
import uu.app.server.annotation.DownloadCommand;
import uu.app.server.dto.DownloadableResourceDtoOut;
import uu.demoapp.main.dto.CreateImageDtoIn;
import uu.demoapp.main.dto.GetImageDtoIn;
import uu.demoapp.main.dto.ImageDtoOut;
import uu.demoapp.main.model.ImageModel;

/**
 * Controller contains commands which demonstrate working with uuAppBinaryStore.
 */
@CommandController
public final class ImageController {

  @Inject
  private ImageModel imageModel;

  @Command(path = "createImage", method = POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ImageDtoOut createBinary(CommandContext<CreateImageDtoIn> ctx) {
    return imageModel.createImage(ctx.getUri().getAwid(), ctx.getDtoIn());
  }

  @DownloadCommand(path = "getImage", method = GET)
  public DownloadableResourceDtoOut getBinaryData(CommandContext<GetImageDtoIn> ucEnv) {
    return imageModel.getImageData(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}
