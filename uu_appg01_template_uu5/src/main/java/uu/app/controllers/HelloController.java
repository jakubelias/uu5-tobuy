package uu.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import uu.app.services.HelloService;

@RestController
@CrossOrigin
@RequestMapping("/1111-2222")
public class HelloController {
  @Autowired
  private HelloService service;

  @RequestMapping(path = "/greetings", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
  String hello() {
    return service.hello();
  }
}
