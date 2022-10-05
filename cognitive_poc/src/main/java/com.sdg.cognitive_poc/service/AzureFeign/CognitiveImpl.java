package com.sdg.cognitive_poc.service.AzureFeign;

import com.sdg.cognitive_poc.service.AzureFeign.FeignClient.AzureFeignClient;
import com.sdg.cognitive_poc.service.AzureFeign.FeignClient.response.Search.SearchResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class CognitiveImpl implements Cognitive{

    @Autowired
    AzureFeignClient azureFeignClient;

    @Override
    public SearchResponse Search(String search, String apiVersion) {
        return azureFeignClient.Search(search, apiVersion);
    }

}
