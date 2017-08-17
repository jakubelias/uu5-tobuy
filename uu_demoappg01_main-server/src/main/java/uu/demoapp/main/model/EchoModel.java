package uu.demoapp.main.model;

import java.time.LocalDateTime;
import javax.inject.Inject;
import org.springframework.stereotype.Component;
import uu.app.validation.ValidationResult;
import uu.app.validation.Validator;
import uu.app.validation.utils.ValidationResultUtils;
import uu.demoapp.main.dto.EchoDtoIn;
import uu.demoapp.main.dto.EchoDtoOut;
import uu.demoapp.main.exceptions.DemoRuntimeException;
import uu.demoapp.main.exceptions.DemoRuntimeException.Error;

/**
 * Simple Model showing working with DTOs, validations and exceptions.
 */
@Component
public final class EchoModel {

  @Inject
  private Validator validator;

  /**
   * Provides basic Java Server info.
   *
   * @param awid awid
   * @param dtoIn DTO in containing echo information.
   * @return JSON containing hello data
   */
  public EchoDtoOut echo(String awid, EchoDtoIn dtoIn) {

    ValidationResult validationResult = validator.validate(dtoIn);
    if (!validationResult.isValid()) {
      throw new DemoRuntimeException(Error.INVALID_DTO_IN, "dtoIn is not valid.", ValidationResultUtils.validationResultToAppErrorMap(validationResult));
    }

    EchoDtoOut echoDtoOut = new EchoDtoOut();
    echoDtoOut.setEchoText(dtoIn.getText());
    echoDtoOut.setServerTime(LocalDateTime.now());

    return echoDtoOut;
  }
}
