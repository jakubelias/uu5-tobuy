package uu.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DemoController {

  @RequestMapping(path = "/demo", method = RequestMethod.GET)
  @ResponseBody
  public String home(){
    return "Test page here.";
  }
}
