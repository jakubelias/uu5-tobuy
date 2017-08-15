package uu.demoapp.main.dao;

import uu.app.objectstore.dao.UuObjectDao;
import uu.demoapp.main.domain.Address;

public interface AddressDao extends UuObjectDao<Address> {

  public Address findByStreet(String awid, String street);
}
