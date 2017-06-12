package uu.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import uu.app.services.HelloService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.websocket.server.PathParam;
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

  @RequestMapping(path = "/*", method = RequestMethod.GET)
  public String about(@PathVariable String tid, @PathVariable String awid) {
    return "forward:/"+tid+"-"+awid+"/public/index.html";
  }

}
