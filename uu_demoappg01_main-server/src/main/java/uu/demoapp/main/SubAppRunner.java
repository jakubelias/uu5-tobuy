package uu.demoapp.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
//@EnableAutoConfiguration(exclude = SpringDataWebAutoConfiguration.class)
@Import(value = {SubAppConfiguration.class})
public class SubAppRunner {

  public static void main(String[] args) throws Exception {
    SpringApplication.run(SubAppRunner.class, args);
  }
}
