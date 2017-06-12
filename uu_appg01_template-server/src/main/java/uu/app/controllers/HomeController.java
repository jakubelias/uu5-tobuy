package uu.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import uu.app.services.HelloService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("/{tid}-{awid}")
public class HomeController {

  @Autowired
  private HelloService service;

  @RequestMapping(method = RequestMethod.GET)
  public void home(HttpServletRequest request, HttpServletResponse httpServletResponse) throws IOException {
    httpServletResponse.sendRedirect(request.getRequestURI().toString() + "/public");
  }

  @RequestMapping(path = "/public", method = RequestMethod.GET)
  public String method() {
    return "forward:/index.html";
  }
}
