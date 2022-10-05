package com.sdg.cognitive_poc.service.Azure;

import com.azure.search.documents.SearchDocument;

import java.util.ArrayList;
import java.util.HashMap;

public interface CognitiveSearch {

    SearchDocument getSearchResults();

}
