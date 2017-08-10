package uu.demoapp.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.ErrorMvcAutoConfiguration;
import org.springframework.context.annotation.Import;

/**
 * Class for running the application.
 */
@SpringBootApplication
@EnableAutoConfiguration(exclude = {ErrorMvcAutoConfiguration.class})
@Import(value = {SubAppConfiguration.class})
public class SubAppRunner {

  public static void main(String[] args) throws Exception {
    SpringApplication.run(SubAppRunner.class, args);
  }

}
