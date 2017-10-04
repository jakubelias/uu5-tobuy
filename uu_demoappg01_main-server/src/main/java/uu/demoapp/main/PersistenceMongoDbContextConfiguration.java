package uu.demoapp.main;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import uu.app.binarystore.BinaryStoreServerContextConfiguration;
import uu.app.binarystore.dao.annotations.BinaryStore;
import uu.app.datastore.annotations.DataStoreConfiguration;
import uu.app.datastore.mongodb.AbstractPersistenceMongoDbContextConfiguration;
import uu.app.objectstore.annotations.ObjectStore;
import uu.app.workspace.store.WorkspaceStorageConfiguration;

/**
 * Spring configuration of the application persistence.
 */
@DataStoreConfiguration
@Import({BinaryStoreServerContextConfiguration.class})
public class PersistenceMongoDbContextConfiguration extends AbstractPersistenceMongoDbContextConfiguration {

  @Value("${objectStoreUri}")
  private String objectStoreUri;

  @Bean({"primaryBinaryStoreFactory"})
  public MongoDbFactory primaryMongoFactory() {
    return getMongoDbFactory(objectStoreUri);
  }

  @ObjectStore(name = {"primaryObjectStore", "demoObjectStore", WorkspaceStorageConfiguration.WORKSPACE_OBJECT_STORE}, primary = true)
  public MongoTemplate primaryMongo(MongoDbFactory mongoDbFactory) throws Exception {
    return getMongoTemplate(mongoDbFactory);
  }

  @BinaryStore(name = {"primaryBinaryStore"})
  public MongoTemplate primaryBinaryStore(MongoDbFactory mongoDbFactory) throws Exception {
    return getMongoTemplate(mongoDbFactory);
  }
}
