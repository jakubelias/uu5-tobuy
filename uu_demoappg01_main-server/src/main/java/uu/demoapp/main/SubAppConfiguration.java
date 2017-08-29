package uu.demoapp.main;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import uu.app.subapp.AbstractSubAppConfiguration;
import uu.app.subapp.OidcAuthenticationContextConfiguration;
import uu.app.subapp.WorkspaceContextConfiguration;
import uu.app.validation.ValidationTypeDefinitionSource;

/**
 * Spring configuration of the application.
 */
@Configuration
@Import({WorkspaceContextConfiguration.class, OidcAuthenticationContextConfiguration.class})
public class SubAppConfiguration extends AbstractSubAppConfiguration {

  /**
   * Configuration of validation types.
   *
   * @return Definitions of validation types.
   */
  @Bean
  public ValidationTypeDefinitionSource demoSchemas() {
    return new ValidationTypeDefinitionSource("classpath*:uu/demoapp/main/schema/*.js");
  }

  @Bean
  public ModelMapper modelMapper() {
    return new ModelMapper();
  }
}

