package uu.demoapp.main;

import org.springframework.boot.SpringApplication;
import uu.app.subapp.AbstractSubAppRunner;
import uu.app.subapp.annotation.UuSubApp;

/**
 * Class for running the application.
 */
@UuSubApp
public class SubAppRunner extends AbstractSubAppRunner {

  public static void main(String[] args) throws Exception {
    SpringApplication.run(SubAppRunner.class, args);
  }

}
