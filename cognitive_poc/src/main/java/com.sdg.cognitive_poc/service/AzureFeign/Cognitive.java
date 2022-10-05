package com.sdg.cognitive_poc.service.AzureFeign;

import com.sdg.cognitive_poc.service.AzureFeign.FeignClient.response.Search.SearchResponse;

public interface Cognitive {

    SearchResponse Search(String search, String apiVersion);

}
