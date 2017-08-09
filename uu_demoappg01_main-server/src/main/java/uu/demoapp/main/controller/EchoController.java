package uu.demoapp.main.controller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

import javax.inject.Inject;
import uu.app.server.CommandContext;
import uu.app.server.annotation.Command;
import uu.app.server.annotation.CommandController;
import uu.demoapp.main.dto.EchoDtoIn;
import uu.demoapp.main.dto.EchoDtoOut;
import uu.demoapp.main.model.EchoModel;

@CommandController
public final class EchoController {

  @Inject
  private EchoModel echoModel;

  @Command(path = "/echo", method = GET)
  public EchoDtoOut home(CommandContext<EchoDtoIn> ctx) {
    EchoDtoOut out = echoModel.echo(ctx.getUri().getAwid(), ctx.getDtoIn());
    return out;
  }
}
