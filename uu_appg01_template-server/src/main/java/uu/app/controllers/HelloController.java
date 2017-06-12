package uu.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import uu.app.services.HelloService;

@RestController
@RequestMapping("/{tid}-{awid}")
public class HelloController {

  @Autowired
  private HelloService service;

  @RequestMapping(path = "/greetings", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
  public String hello() {
    return service.hello();
  }
}
