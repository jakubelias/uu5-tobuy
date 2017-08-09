package uu.demoapp.main.model;

import java.time.LocalDateTime;
import javax.inject.Inject;
import org.springframework.stereotype.Component;
import uu.app.validation.ValidationResult;
import uu.app.validation.Validator;
import uu.app.validation.utils.ValidationResultUtils;
import uu.demoapp.main.dao.EchoDao;
import uu.demoapp.main.domain.Echo;
import uu.demoapp.main.dto.EchoDtoIn;
import uu.demoapp.main.dto.EchoDtoOut;
import uu.demoapp.main.model.EchoRuntimeException.Error;

@Component
public final class EchoModel {

  @Inject
  private Validator validator;


  @Inject
  private EchoDao echoDao;

  /**
   * Provides basic Java Server info.
   *
   * @return JSON containing hello data
   */
  public EchoDtoOut echo(String awid, EchoDtoIn dtoIn) {

    ValidationResult validationResult = validator.validate(dtoIn);
    EchoDtoOut echoDtoOut = new EchoDtoOut();
    if (!validationResult.isValid()) {
      throw new EchoRuntimeException(Error.INVALID_DTO_IN, "dtoIn is not valid.", ValidationResultUtils.validationResultToAppErrorMap(validationResult));
    }

    echoDtoOut.setEchoText(dtoIn.getText());
    echoDtoOut.setServerTime(LocalDateTime.now());

    return echoDtoOut;
  }

  /**
   * Stores echo into ObjectStore.
   *
   * @return DTO out containing data of stored object.
   */
  public EchoDtoOut create(String awid, EchoDtoIn dtoIn) {
    //TODO validate

    Echo echo = new Echo();
    echo.setAwid(awid);
    echo.setText(dtoIn.getText());

    echoDao.create(echo);

    EchoDtoOut echoDtoOut = new EchoDtoOut();
    echoDtoOut.setEchoText(echo.toString());

    return echoDtoOut;
  }

  /**
   * Finds echo in ObjectStore.
   * 
   * @return DTO out containing data of stored object.
   */
  public EchoDtoOut find(String awid, EchoDtoIn dtoIn) {
    Echo echo = echoDao.findByText(awid, dtoIn.getText());

    EchoDtoOut echoDtoOut = new EchoDtoOut();

    if (echo != null) {
      echoDtoOut.setEchoText(echo.toString());
    }

    return echoDtoOut;
  }
}
