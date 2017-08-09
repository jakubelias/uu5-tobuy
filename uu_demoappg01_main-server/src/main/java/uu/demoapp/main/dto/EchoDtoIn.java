package uu.demoapp.main.dto;

/**
 * Simple Dto for demonstration of CommandContext.
 */
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
    return "EchoDtoIn{" +
        "text='" + text + '\'' +
        '}';
  }
}
