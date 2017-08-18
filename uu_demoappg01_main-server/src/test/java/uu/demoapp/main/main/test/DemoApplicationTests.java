package uu.demoapp.main.main.test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Matchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Collections;
import javax.inject.Inject;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import uu.app.authorization.Authorization;
import uu.app.authorization.DefaultAuthorizationContext;
import uu.demoapp.main.SubAppRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = SubAppRunner.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class DemoApplicationTests {

  protected static final String CONTEXT_PATH = "/uu-demoappg01-main";
  @Inject
  protected WebApplicationContext wac;
  protected MockMvc mockMvc;

  @MockBean
  protected Authorization authorization;

  /**
   * Test preparation.
   */
  @Before
  public void setup() {
    this.mockMvc = MockMvcBuilders
        .webAppContextSetup(this.wac)
        .defaultRequest(get(CONTEXT_PATH).contextPath(CONTEXT_PATH))
        .build();
    when(authorization.authorize(any(), any())).thenReturn(new DefaultAuthorizationContext(true, Collections.emptySet()));
  }

  @Test
  public void echoTest() throws Exception {
    String text = "Testing text.";

    MvcResult result = mockMvc.perform(get(CONTEXT_PATH + "/0-0/echo")
        .param("text", text)

    ).andDo(MockMvcResultHandlers.print())
        .andExpect(status().isOk())
        .andReturn();

    assertThat(result.getResponse().getContentAsString().contains(text));
  }

}
