package uu.demoapp.main.dao.mongodb;

import javax.annotation.PostConstruct;
import org.springframework.stereotype.Component;
import uu.app.binarystore.dao.BinaryServerMongoDbDao;
import uu.app.binarystore.dao.annotations.BinaryStoreDao;
import uu.app.binarystore.domain.UuBinary;
import uu.app.datastore.concurrency.ConcurrencyStrategy;

@BinaryStoreDao(storage = "primaryMongo", maxNoi = 10000, maxSoi = 10000, concurrency = ConcurrencyStrategy.REVISION)
@Component
public class BinaryMongoDbDao extends BinaryServerMongoDbDao<UuBinary> {

  @PostConstruct
  private void createSchemaOnInit() {
    createSchema();
  }
}
