package uu.demoapp.main.dao.mongodb;

import uu.app.objectstore.annotations.ObjectStoreDao;
import uu.app.objectstore.mongodb.dao.UuObjectMongoDbDao;
import uu.demoapp.main.dao.EchoDao;
import uu.demoapp.main.domain.Echo;

@ObjectStoreDao(entity = Echo.class,storage="demoObjectStore")
public class EchoDaoImpl extends UuObjectMongoDbDao<Echo> implements EchoDao {

}
