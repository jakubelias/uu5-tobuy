package uu.demoapp.main;

import org.springframework.boot.SpringApplication;
import uu.app.subapp.AbstractSubAppRunner;

/**
 * Class for running the application.
 */
public class SubAppRunner extends AbstractSubAppRunner {

  public static void main(String[] args) throws Exception {
    SpringApplication.run(SubAppRunner.class, args);
  }

}
