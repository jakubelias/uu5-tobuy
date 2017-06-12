package uu.app.main.test;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class DemoApplicationTests {

  @Autowired
  private TestRestTemplate restTemplate;

  @Test
  public void testDemoPage() {
    assertThat(restTemplate.getForObject("/demo", String.class)).contains("Test page");
  }

  @Test
  public void testGreetingPage() {
    ResponseEntity<String> response = restTemplate.getForEntity(
      "/demo", String.class);
    Assert.assertEquals(200, response.getStatusCodeValue());
    Assert.assertEquals("Test page here.", response.getBody());
  }
}
