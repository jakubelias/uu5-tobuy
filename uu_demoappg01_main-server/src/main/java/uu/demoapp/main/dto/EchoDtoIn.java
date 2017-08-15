package uu.demoapp.main.dto;

import uu.app.validation.ValidationType;

/**
 * Simple Dto for demonstration of CommandContext and validation usage.
 */
@ValidationType("echoType")
public final class EchoDtoIn {

  private String text;

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  @Override
  public String toString() {
    return "EchoDtoIn{"
        + "text='" + text + '\''
        + '}';
  }
}
