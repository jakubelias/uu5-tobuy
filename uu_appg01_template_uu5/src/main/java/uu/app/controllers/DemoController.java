package uu.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class DemoController {
  @RequestMapping("/")
  public void home(HttpServletResponse httpServletResponse) throws IOException {
    httpServletResponse.sendRedirect("public/");
  }
//  @ResponseBody
//  String home() {
//    return "Home page here.";
//  }

  @RequestMapping("/demo")
  @ResponseBody
  String test() {
    return "Test page here.";
  }
}
