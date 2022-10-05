package com.sdg.cognitive_poc.service.AzureFeign.FeignClient.response.Search;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SearchResponse {

    ListDocument list;

}