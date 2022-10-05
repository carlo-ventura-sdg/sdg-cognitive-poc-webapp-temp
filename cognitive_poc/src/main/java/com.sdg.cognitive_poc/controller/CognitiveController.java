package com.sdg.cognitive_poc.controller;

import com.sdg.cognitive_poc.controller.response.SearchResponse;
import com.sdg.cognitive_poc.controller.utils.BaseController;
import com.sdg.cognitive_poc.controller.utils.TypedResult;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.info.Info;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;

@Slf4j
@RestController
@OpenAPIDefinition(info = @Info(title = "REST API for Cognitive POC", version = "1.0.0"))
public class CognitiveController extends BaseController {

    @GetMapping(value = "/GetMapping")
    @Operation(summary = "API to search documents")
    public /*ResponseEntity<TypedResult<SearchResponse>>*/ Boolean Search() {

        try {

            return true;
                    //handleSuccess(GetProjectsResponse.builder().projects(projects).build());

        } catch (Exception e) {

            log.error("FAILED TO GET PROJECTS -> " + e.getMessage());
            throw e;

        }
    }

}
