package datest;

import da.Application;
import da.controller.SandwichController;
import da.model.Sandwich;
import da.repositories.SandwichRepository;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.json.JSONException;
import java.math.BigDecimal;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import java.util.UUID;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SandwichTest {
    @LocalServerPort
    private int port;
    
    @Autowired
    private SandwichRepository sandwichRepository;

    TestRestTemplate restTemplate = new TestRestTemplate();

    HttpHeaders headers = new HttpHeaders();

    @Test 
    public void test_get_empty_sandwich_array() {
        try {
            sandwichRepository.deleteAll();
            HttpEntity<String> entity = new HttpEntity<String>(null, headers);
            ResponseEntity<String> response = restTemplate.exchange(
                createURLWithPort("/sandwiches"),
                HttpMethod.GET, entity, String.class
            );
            String expectedResult = "[]";
            JSONAssert.assertEquals(expectedResult, response.getBody(), false);
        } catch (JSONException e) {
            throw new RuntimeException(e);
        }
    }

    /*@Test 
    public void test_post_sandwich() throws JSONException, JsonProcessingException {
        Sandwich sandwich = buildSandwich();
        ObjectMapper mapper = new ObjectMapper();
        HttpEntity<String> entity = new HttpEntity<String>(mapper.writeValueAsString(sandwich), headers);
        ResponseEntity<String> response = restTemplate.exchange(
            createURLWithPort("/sandwiches"),
            HttpMethod.POST, entity, String.class
        );
        String expectedResult = "{\"id\":\""+response.getBody().getId()+"\",\"name\":\"smos\",\"ingredients\":\"hesp, kaas, groenten\",\"price\":5}";
        JSONAssert.assertEquals(expectedResult, response.getBody(), false);
    }*/

    private String createURLWithPort(String uri) {
        return "http://localhost:" + port + uri;
    }

    private Sandwich buildSandwich() {
        Sandwich sandwich = new Sandwich();
        sandwich.setName("smos");
        sandwich.setIngredients("hesp, kaas, groenten");
        sandwich.setPrice(new BigDecimal(5));
        return sandwich;
    }
}