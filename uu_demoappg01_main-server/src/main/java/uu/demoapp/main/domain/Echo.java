package uu.demoapp.main.domain;

import uu.app.objectstore.domain.UuObject;
import uu.app.objectstore.mongodb.domain.AbstractUuObject;


public class Echo extends AbstractUuObject{

  private String text;

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  @Override
  public String toString() {
    return "Echo{" +
        "text='" + text + '\'' +
        ", id='" + getId() + '\'' +
        "} " + super.toString();
  }
}
