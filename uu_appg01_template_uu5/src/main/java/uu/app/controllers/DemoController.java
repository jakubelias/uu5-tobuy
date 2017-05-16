package uu.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DemoController {
  @RequestMapping("/")
  @ResponseBody
  String home() {
    return "Home page here.";
  }

  @RequestMapping("/demo")
  @ResponseBody
  String test() {
    return "Test page here.";
  }
}
