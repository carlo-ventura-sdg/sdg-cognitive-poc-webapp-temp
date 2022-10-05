package com.sdg.cognitive_poc.controller.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Collection;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SearchResponse {

    Collection<Float> searchScore;
    Collection<String> snippet;
    Collection<String> Summary;
    Collection<String> document_name;

}
