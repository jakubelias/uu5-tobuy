package uu.app.services;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.stereotype.Service;

import java.time.LocalTime;

@Service
public class HelloService {
  public String hello() {
    ObjectMapper mapper = new ObjectMapper();

    ObjectNode result = mapper.createObjectNode();
//    result.put("data", "Hello uu5 from Java");
    result.put("data", LocalTime.now().toString());

    return result.toString();
  }
}
