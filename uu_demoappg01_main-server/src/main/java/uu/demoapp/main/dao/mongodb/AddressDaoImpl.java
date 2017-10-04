package uu.demoapp.main.dao.mongodb;

import javax.annotation.PostConstruct;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.core.index.Index;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import uu.app.objectstore.annotations.ObjectStoreDao;
import uu.app.objectstore.mongodb.dao.UuObjectMongoDbDao;
import uu.demoapp.main.dao.AddressDao;
import uu.demoapp.main.domain.Address;

/**
 * UuAppObjectStore DAO example.
 */
@ObjectStoreDao(entity = Address.class, store = "demoObjectStore")
public class AddressDaoImpl extends UuObjectMongoDbDao<Address> implements AddressDao {

  public static final String ATTRS_STREET = "street";

  public void createSchema() {
    super.createSchema();
    createIndex(new Index().on(ATTR_AWID, Direction.ASC).on(ATTRS_STREET, Direction.ASC).unique());
  }

  /**
   * Finds address by street.
   *
   * @param awid awid
   * @param street Street
   * @return Address entity
   */
  public Address findByStreet(String awid, String street) {
    Query q = new Query().addCriteria(Criteria.where(ATTR_AWID).is(awid).and(ATTRS_STREET).is(street));
    Address data = findOne(q);

    return data;
  }

  /**
   * Creates schema on start. Does nothing if schema already exists in database.
   */
  @PostConstruct
  private void initializeSchema() {
    createSchema();
  }
}
