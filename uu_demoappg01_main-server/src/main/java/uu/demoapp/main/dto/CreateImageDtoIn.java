package uu.demoapp.main.dto;

import org.springframework.web.multipart.MultipartFile;
import uu.app.validation.ValidationType;

@ValidationType("createImageType")
public  class CreateImageDtoIn {

  private String code;
  private String name;
  private String description;
  private String filename;
  private String contentType;
  private MultipartFile data;

  /**
   * @return Externally specified or generated code.
   */
  public String getCode() {
    return code;
  }

  public void setCode(String code) {
    this.code = code;
  }

  /**
   * @return User name of binary. It is uu5String limited to 4000 characters.
   */
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  /**
   * @return User description of binary. It is uu5String limited to 4000 characters.
   */
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }


  /**
   * @return Name of the uploaded file. If not set it is obtained from http header or the default value "defaultName" is used.
   */
  public String getFilename() {
    return filename;
  }

  public void setFilename(String filename) {
    this.filename = filename;
  }

  /**
   * @return Content type of the uploaded file. If not set it is obtained from http header or the default value "application/octet-stream" is used.
   */
  public String getContentType() {
    return contentType;
  }

  public void setContentType(String contentType) {
    this.contentType = contentType;
  }

  /**
   * @return Binary data. Required.
   */
  public MultipartFile getData() {
    return data;
  }

  public void setData(MultipartFile data) {
    this.data = data;
  }
}
