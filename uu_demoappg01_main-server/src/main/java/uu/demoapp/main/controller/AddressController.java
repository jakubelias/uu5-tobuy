package uu.demoapp.main.controller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import javax.inject.Inject;
import uu.app.server.CommandContext;
import uu.app.server.annotation.Command;
import uu.app.server.annotation.CommandController;
import uu.demoapp.main.dto.AddressDtoOut;
import uu.demoapp.main.dto.CreateAddressDtoIn;
import uu.demoapp.main.dto.FindAddressDtoIn;
import uu.demoapp.main.model.AddressModel;

/**
 * Controller contains commands which demonstrate working with uuAppObjectStore.
 */
@CommandController
public final class AddressController {

  @Inject
  private AddressModel addressModel;

  @Command(path = "createAddress", method = POST)
  public AddressDtoOut create(CommandContext<CreateAddressDtoIn> ctx) {
    AddressDtoOut out = addressModel.create(ctx.getUri().getAwid(), ctx.getDtoIn());
    return out;
  }

  @Command(path = "findAddress", method = GET)
  public AddressDtoOut find(CommandContext<FindAddressDtoIn> ctx) {
    AddressDtoOut out = addressModel.find(ctx.getUri().getAwid(), ctx.getDtoIn());
    return out;
  }

}
