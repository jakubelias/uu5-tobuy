package uu.app.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.time.LocalTime;
import org.springframework.stereotype.Service;

@Service
public class HelloService {

  /**
   * Provides basic Java Server info.
   *
   * @return JSON containing hello data
   */
  public String hello() {
    ObjectMapper mapper = new ObjectMapper();

    ObjectNode result = mapper.createObjectNode();
    result.put("data", LocalTime.now().toString());

    return result.toString();
  }
}
