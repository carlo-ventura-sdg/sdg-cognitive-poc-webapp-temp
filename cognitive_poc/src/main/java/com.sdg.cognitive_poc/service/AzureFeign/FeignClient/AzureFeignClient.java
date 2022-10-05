package com.sdg.cognitive_poc.service.AzureFeign.FeignClient;

import com.sdg.cognitive_poc.service.AzureFeign.FeignClient.response.Search.SearchResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(value = "WatsonFeignClient", url = "${feign.client.config.AzureFeignClient.url}")
public interface AzureFeignClient {

    @GetMapping
    SearchResponse Search(@RequestParam String search,
                          @RequestParam("api-version") String apiVersion
    );

}
