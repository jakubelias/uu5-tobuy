package uu.demoapp.main;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import uu.app.authentication.oidc.OpenIdConnectContextConfiguration;
import uu.app.datastore.annotations.DataStoreConfiguration;
import uu.app.datastore.mongodb.AbstractMongoDbContextConfiguration;
import uu.app.datastore.mongodb.DatastoreMongoDbContextConfiguration;
import uu.app.objectstore.annotations.ObjectStore;
import uu.app.server.UseCaseServerContextConfiguration;
import uu.app.validation.ValidationContextConfiguration;
import uu.app.validation.ValidationTypeDefinitionSource;

/**
 * Spring configuration of the application.
 */
@DataStoreConfiguration
@Import({ValidationContextConfiguration.class, UseCaseServerContextConfiguration.class, DatastoreMongoDbContextConfiguration.class, OpenIdConnectContextConfiguration.class})
//   OpenIdConnectWebMvcConfigurer.class
public class SubAppConfiguration extends AbstractMongoDbContextConfiguration {

  @Value("${objectStoreUri}")
  private String objectStoreUri;

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
  public MongoDbFactory primaryMongoFactory() {
    return getMongoDbFactory(objectStoreUri);
  }

  //first name is for persistence.json
  @ObjectStore(name = {"demoObjectStore"}, primary = true)
  public MongoTemplate primaryMongo(MongoDbFactory mongoDbFactory) throws Exception {
    return getMongoTemplate(mongoDbFactory);
  }

}

