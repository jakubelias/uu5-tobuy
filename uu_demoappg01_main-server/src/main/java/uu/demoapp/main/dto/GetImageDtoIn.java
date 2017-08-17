package uu.demoapp.main.dto;

import uu.app.validation.ValidationType;

@ValidationType("getImageType")
public final class GetImageDtoIn {

  private String code;
  private String contentDisposition;

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
   * @return Dtyle of returned binary data; possible values: ["inline", "attachment"]. Default value "inline".
   */
  public String getContentDisposition() {
    return contentDisposition;
  }

  public void setContentDisposition(String contentDisposition) {
    this.contentDisposition = contentDisposition;
  }
}
