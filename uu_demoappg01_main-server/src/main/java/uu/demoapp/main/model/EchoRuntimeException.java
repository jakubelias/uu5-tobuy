package uu.demoapp.main.model;

import java.util.Map;
import java.util.Set;
import uu.app.exception.AppRuntimeException;
import uu.app.exception.ErrorCode;
import uu.app.validation.ValidationError;

public final class EchoRuntimeException extends AppRuntimeException {

  public enum Error {
    INVALID_DTO_IN(ErrorCode.application("uu-demoappg01-main/echo/invalidDtoIn"));
    private ErrorCode code;

    Error(ErrorCode code) {
      this.code = code;
    }

    public ErrorCode getCode() {
      return code;
    }
  }

  //TODO KEK - místo Map<String, Map<String, Set<ValidationError>>> by mělo být AppErrorMap class
  public EchoRuntimeException(Error code, String message, Map<String, Map<String, Set<ValidationError>>> appErrorMap, Map<String, ?> paramMap) {
    super(code.getCode(), message, appErrorMap, paramMap, null);
  }
}
