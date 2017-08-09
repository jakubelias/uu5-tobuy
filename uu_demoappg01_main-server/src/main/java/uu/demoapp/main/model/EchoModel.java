package uu.demoapp.main.model;

import java.time.LocalDateTime;
import javax.inject.Inject;
import org.springframework.stereotype.Component;
import uu.app.validation.ValidationResult;
import uu.app.validation.Validator;
import uu.app.validation.utils.ValidationResultUtils;
import uu.demoapp.main.dto.EchoDtoIn;
import uu.demoapp.main.dto.EchoDtoOut;
import uu.demoapp.main.model.EchoRuntimeException.Error;

@Component
public final class EchoModel {

  @Inject
  private Validator validator;


  /**
   * Provides basic Java Server info.
   *
   * @return JSON containing hello data
   */
  public EchoDtoOut echo(String awid, EchoDtoIn dtoIn) {

    ValidationResult validationResult = validator.validate(dtoIn);
    EchoDtoOut echoDtoOut = new EchoDtoOut();
    if (!validationResult.isValid()) {
      throw new EchoRuntimeException(Error.INVALID_DTO_IN, "dtoIn is not valid.", ValidationResultUtils.validationResultToAppErrorMap(validationResult), null);
    }

    echoDtoOut.setEchoText(dtoIn.getText());
    echoDtoOut.setServerTime(LocalDateTime.now());

    return echoDtoOut;
  }
}
