package uu.demoapp.main.controller;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import javax.inject.Inject;
import uu.app.server.CommandContext;
import uu.app.server.annotation.Command;
import uu.app.server.annotation.CommandController;
import uu.demoapp.main.dto.EchoDtoIn;
import uu.demoapp.main.dto.EchoDtoOut;
import uu.demoapp.main.model.EchoModel;

/**
 * Echo controller for handling requests.
 */
@CommandController
public final class EchoController {

  @Inject
  private EchoModel echoModel;

  @Command(path = "echo", method = GET)
  public EchoDtoOut echo(CommandContext<EchoDtoIn> ctx) {
    EchoDtoOut out = echoModel.echo(ctx.getUri().getAwid(), ctx.getDtoIn());
    return out;
  }

  @Command(path = "loadDemoContent", method = GET)
  public EchoDtoOut loadDemoContent(CommandContext<Void> ctx) {
    EchoDtoOut out = new EchoDtoOut();
    out.setEchoText("Content from Command.");
    return out;
  }



  /**
   * Provides information about logged user.
   */
  @Command(path = "hello", method = GET)
  public EchoDtoOut hello(CommandContext<EchoDtoIn> ctx) {
    String uuId = ctx.getAuthenticationSession().getIdentity().getUUIdentity();
    String name = ctx.getAuthenticationSession().getIdentity().getName();

    EchoDtoOut out = new EchoDtoOut();
    out.setEchoText(ctx.getDtoIn() + ", hello " + name + "(" + uuId + ")");
    return out;
  }

  @Command(path = "create", method = POST)
  public EchoDtoOut create(CommandContext<EchoDtoIn> ctx) {
    EchoDtoOut out = echoModel.create(ctx.getUri().getAwid(), ctx.getDtoIn());
    return out;
  }

  @Command(path = "find", method = POST)
  public EchoDtoOut find(CommandContext<EchoDtoIn> ctx) {
    EchoDtoOut out = echoModel.find(ctx.getUri().getAwid(), ctx.getDtoIn());
    return out;
  }

}
