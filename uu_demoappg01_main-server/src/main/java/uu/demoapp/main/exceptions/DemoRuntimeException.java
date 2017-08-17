package uu.demoapp.main.exceptions;

import java.util.Map;
import uu.app.exception.AppErrorMap;
import uu.app.exception.AppRuntimeException;
import uu.app.exception.ErrorCode;

public final class DemoRuntimeException extends AppRuntimeException {

  public DemoRuntimeException(Error code, String message, Throwable cause) {
    super(code.getCode(), message, cause);
  }

  public DemoRuntimeException(Error code, String message, Map<String, ?> paramMap) {
    super(code.getCode(), message, (AppErrorMap) null, paramMap, null);
  }

  public enum Error {
    INVALID_DTO_IN(ErrorCode.application("uu-demoappg01-main/demo/invalidDtoIn")),
    IMAGE_CREATE_FAILED(ErrorCode.system("uu-demoappg01-main/demo/imageCreateFailed")),
    IMAGE_DOES_NOT_EXIST(ErrorCode.application("uu-demoappg01-main/demo/imageDoesNotExist"));

    private ErrorCode code;

    Error(ErrorCode code) {
      this.code = code;
    }

    public ErrorCode getCode() {
      return code;
    }
  }
}
