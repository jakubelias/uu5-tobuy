package uu.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@Controller
@RequestMapping("/{tid}-{awid}")
public class HomeController {

  @RequestMapping(method = RequestMethod.GET)
  public void home(HttpServletRequest request, HttpServletResponse httpServletResponse) throws IOException {
    httpServletResponse.sendRedirect(request.getRequestURI().toString() + "/home");
  }

  @RequestMapping(path = "/*", method = RequestMethod.GET)
  public String about() {
    return "forward:/index.html";
  }

  @RequestMapping(path = "/public/**", method = GET)
  public String resource(HttpServletRequest request) throws IOException {
    Pattern p = Pattern.compile(".*/public/(.*)");
    Matcher matcher = p.matcher(request.getRequestURI());
    if (matcher.matches()) {
      String resourcePath = matcher.group(1);
      return "forward:/"+resourcePath;
    }
    return "forward:/index.html";
  }

}
