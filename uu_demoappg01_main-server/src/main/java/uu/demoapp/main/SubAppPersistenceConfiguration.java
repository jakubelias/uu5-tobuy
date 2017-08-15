package uu.demoapp.main;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import uu.app.binarystore.BinaryStoreServerContextConfiguration;
import uu.app.datastore.annotations.DataStoreConfiguration;
import uu.app.datastore.mongodb.AbstractMongoDbContextConfiguration;
import uu.app.datastore.mongodb.DatastoreMongoDbContextConfiguration;
import uu.app.objectstore.annotations.ObjectStore;
import uu.app.workspace.store.WorkspaceStorageConfiguration;

/**
 * Spring configuration of the application persistence.
 */
@DataStoreConfiguration
@Import({
    DatastoreMongoDbContextConfiguration.class,
    BinaryStoreServerContextConfiguration.class
})
public class SubAppPersistenceConfiguration extends AbstractMongoDbContextConfiguration {

  @Value("${objectStoreUri}")
  private String objectStoreUri;

  @Bean
  public MongoDbFactory primaryMongoFactory() {
    return getMongoDbFactory(objectStoreUri);
  }

  @ObjectStore(name = {"primaryObjectStore", "primaryMongo", "demoObjectStore",  WorkspaceStorageConfiguration.WORKSPACE_OBJECT_STORE}, primary = true)
  public MongoTemplate primaryMongo(MongoDbFactory mongoDbFactory) throws Exception {
    return getMongoTemplate(mongoDbFactory);
  }

}
