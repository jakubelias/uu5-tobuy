package uu.app.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class DemoController {

  @RequestMapping(path = "/", method = RequestMethod.GET)
  public void home(HttpServletRequest request, HttpServletResponse httpServletResponse) throws IOException {
    httpServletResponse.sendRedirect(request.getRequestURL().toString() + "public/");
  }

  @RequestMapping(path = "/public", method = RequestMethod.GET)
  public void method(HttpServletRequest request, HttpServletResponse httpServletResponse) throws IOException {
    httpServletResponse.sendRedirect(request.getRequestURL().toString() + "/");
  }
}
