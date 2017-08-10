package uu.demoapp.main.dao.mongodb;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import uu.app.objectstore.annotations.ObjectStoreDao;
import uu.app.objectstore.mongodb.dao.UuObjectMongoDbDao;
import uu.demoapp.main.dao.EchoDao;
import uu.demoapp.main.domain.Echo;

@ObjectStoreDao(entity = Echo.class, storage = "demoObjectStore")
public class EchoDaoImpl extends UuObjectMongoDbDao<Echo> implements EchoDao {

  public Echo findByText(String awid, String text) {
    Query q = new Query().addCriteria(Criteria.where(ATTR_AWID).is(awid).and("text").is(text));
    Echo data = findOne(q);

    return data;
  }
}
