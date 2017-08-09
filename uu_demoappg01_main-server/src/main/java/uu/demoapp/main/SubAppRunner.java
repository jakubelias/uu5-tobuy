package uu.demoapp.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

/**
 * Class for running the application.
 */
@SpringBootApplication
@Import(value = {SubAppConfiguration.class})
public class SubAppRunner {

  public static void main(String[] args) throws Exception {
    SpringApplication.run(SubAppRunner.class, args);
  }

}
