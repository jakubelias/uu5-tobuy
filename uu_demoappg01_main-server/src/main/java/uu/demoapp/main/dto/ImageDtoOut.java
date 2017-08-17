package uu.demoapp.main.dto;

import uu.app.datastore.domain.LockableSysAttributes;
import uu.app.datastore.mongodb.domain.UuDataEntitySysAttributes;
import uu.app.dto.AbstractDtoOut;

public class ImageDtoOut extends AbstractDtoOut {

  private String id;
  private String awid;
  private String code;
  private String name;
  private String description;
  private String filename;
  private String contentType;
  private LockableSysAttributes sys;

  /**
   * @return Generated unique code.
   */
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  /**
   * @return App module id - unique code specified externally.
   */
  public String getAwid() {
    return awid;
  }

  public void setAwid(String awid) {
    this.awid = awid;
  }

  /**
   * @return System attributes.
   */
  public LockableSysAttributes getSys() {
    return sys;
  }

  public void setSys(LockableSysAttributes sys) {
    this.sys = sys;
  }

  /**
   * @return User name of binary; It is uu5String limited to 255 characters.
   */
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  /**
   * @return Identifier of the binary (all versions of binary have same code).
   */
  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  /**
   * @return User description of binary.
   */
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  /**
   * @return Name of the uploaded file.
   */
  public String getFilename() {
    return filename;
  }

  public void setFilename(String filename) {
    this.filename = filename;
  }

  /**
   * @return Content type of the uploaded file.
   */
  public String getContentType() {
    return contentType;
  }

  public void setContentType(String contentType) {
    this.contentType = contentType;
  }
}
