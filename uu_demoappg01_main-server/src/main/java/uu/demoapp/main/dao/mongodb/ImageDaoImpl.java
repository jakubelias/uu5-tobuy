package uu.demoapp.main.dao.mongodb;

import javax.annotation.PostConstruct;
import uu.app.binarystore.dao.annotations.BinaryStoreDao;
import uu.app.binarystore.dao.mongodb.BinaryServerMongoDbDao;
import uu.app.datastore.concurrency.ConcurrencyStrategy;
import uu.demoapp.main.dao.ImageDao;
import uu.demoapp.main.domain.Image;

/**
 * UuAppBinaryStore DAO example.
 */
@BinaryStoreDao(entityClass = Image.class, store = "primaryBinaryStore", maxNoi = 10000, maxSoi = 10000, maxSob = 10000000, concurrency = ConcurrencyStrategy.REVISION)
public class ImageDaoImpl extends BinaryServerMongoDbDao<Image> implements ImageDao {

  /**
   * Creates schema on start. Does nothing if schema already exists in database.
   */
  @PostConstruct
  private void initializeSchema() {
    createSchema();
  }
}
