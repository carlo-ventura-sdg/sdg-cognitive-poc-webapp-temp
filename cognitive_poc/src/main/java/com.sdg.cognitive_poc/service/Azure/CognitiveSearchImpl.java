package com.sdg.cognitive_poc.service.Azure;

import com.azure.core.credential.AzureKeyCredential;
import com.azure.search.documents.SearchClient;
import com.azure.search.documents.SearchClientBuilder;
import com.azure.search.documents.SearchDocument;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class CognitiveSearchImpl implements CognitiveSearch{
    @Override
    public SearchDocument getSearchResults() {

        SearchClient searchClient = new SearchClientBuilder()
                .endpoint("https://searchercloudservices.search.windows.net")
                .credential(new AzureKeyCredential("z0g9549K0sn9NxcpaKXoAywsHVRinIPyjnawzlQW6dAzSeCrxKfu"))
                .indexName("index-pdf-demo")
                .buildClient();

        SearchDocument result = searchClient.getDocument("document_name", SearchDocument.class);
        for (Map.Entry<String, Object> keyValuePair : result.entrySet()) {
            System.out.printf("Document name %s, Document value %s", keyValuePair.getKey(), keyValuePair.getValue());
        }

        return result;
    }
}
