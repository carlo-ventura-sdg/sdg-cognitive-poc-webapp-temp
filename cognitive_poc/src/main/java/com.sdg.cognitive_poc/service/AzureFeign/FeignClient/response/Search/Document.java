package com.sdg.cognitive_poc.service.AzureFeign.FeignClient.response.Search;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import lombok.*;
import java.util.ArrayList;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Document {
    @JacksonXmlElementWrapper(useWrapping=false)
    ArrayList<Content> content;

}
