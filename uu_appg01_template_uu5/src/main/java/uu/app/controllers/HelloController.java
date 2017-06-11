package uu.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import uu.app.services.HelloService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping("/84723967990075193-920ebf3f9f3f4a5dabcce0d67f899598")
public class HelloController {

  @Autowired
  private HelloService service;

  @RequestMapping(method = RequestMethod.GET)
  public void home(HttpServletRequest request, HttpServletResponse httpServletResponse) throws IOException {
    httpServletResponse.sendRedirect(request.getRequestURL().toString() + "/public/");
  }

  @RequestMapping(path = "/public", method = RequestMethod.GET)
  public void method(HttpServletRequest request, HttpServletResponse httpServletResponse) throws IOException {
    httpServletResponse.sendRedirect(request.getRequestURL().toString() + "/");
  }

  @RequestMapping(path = "/greetings", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
  String hello() {
    return service.hello();
  }
}
