package uu.demoapp.main.main.test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import javax.inject.Inject;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class DemoApplicationTests {

  protected static final String CONTEXT_PATH = "/uu-demoappg01-main";
  @Inject
  protected WebApplicationContext wac;
  protected MockMvc mockMvc;

  /**
   * Test preparation.
   */
  @Before
  public void setup() {
    this.mockMvc = MockMvcBuilders
        .webAppContextSetup(this.wac)
        .defaultRequest(get(CONTEXT_PATH).contextPath(CONTEXT_PATH))
        .build();
  }

  @Test
  public void createBinaryTest() throws Exception {
    String text = "Testing text.";

    MvcResult result = mockMvc.perform(get(CONTEXT_PATH + "/0-0/echo")
        .param("text", text)

    ).andDo(MockMvcResultHandlers.print())
        .andExpect(status().isOk())
        .andReturn();

    assertThat(result.getResponse().getContentAsString().contains(text));
  }

}
