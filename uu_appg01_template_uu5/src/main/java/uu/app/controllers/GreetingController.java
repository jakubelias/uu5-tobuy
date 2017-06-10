package uu.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import uu.app.services.GreetingService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class GreetingController {

  @Autowired
  private GreetingService service;

  @RequestMapping("/greeting")
  @ResponseBody
  String greeting() {
    return service.greet();
  }

}
