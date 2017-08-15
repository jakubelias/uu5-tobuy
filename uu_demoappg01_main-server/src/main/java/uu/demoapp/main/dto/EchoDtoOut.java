package uu.demoapp.main.dto;

import java.time.LocalDateTime;
import uu.app.dto.AbstractDtoOut;

/**
 * Simple DTO out used as CMD response.
 */
public final class EchoDtoOut extends AbstractDtoOut {

  private String echoText;
  private LocalDateTime serverTime;

  public String getEchoText() {
    return echoText;
  }

  public void setEchoText(String echoText) {
    this.echoText = echoText;
  }

  public LocalDateTime getServerTime() {
    return serverTime;
  }

  public void setServerTime(LocalDateTime serverTime) {
    this.serverTime = serverTime;
  }

  @Override
  public String toString() {
    return "EchoDtoOut{"
        + "echoText='" + echoText + '\''
        + ", serverTime=" + serverTime
        + '}';
  }
}
