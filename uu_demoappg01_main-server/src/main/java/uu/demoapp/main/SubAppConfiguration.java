package uu.demoapp.main;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import uu.app.server.UseCaseServerContextConfiguration;
import uu.app.validation.ValidationContextConfiguration;
import uu.app.validation.ValidationTypeDefinitionSource;

@Configuration
@Import({ValidationContextConfiguration.class,UseCaseServerContextConfiguration.class})
public class SubAppConfiguration {

  @Bean
  public ValidationTypeDefinitionSource demoSchemas() {
    return new ValidationTypeDefinitionSource("classpath*:uu/demoapp/main/schema/*.js");
  }

}

