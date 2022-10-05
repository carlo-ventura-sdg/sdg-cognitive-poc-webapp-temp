package com.sdg.cognitive_poc.utils;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class Constants {

    public static class Result {

        public static class Message {

            public static String SUCCESS_MESSAGGE = "SUCCESS";
            public static String ERROR_MESSAGGE = "ERROR";

        }

    }
    public static class Wex {

        @NoArgsConstructor
        @AllArgsConstructor
        @Getter
        public enum credentials {

            USERNAME("WEXGEADEV"),
            PASSWORD("Af4m3j$8D5Ke6Ym@");

            private String value;

        }
        @NoArgsConstructor
        @AllArgsConstructor
        @Getter
        public enum params {

            FUNCTION("query-search"),
            INDENT("true"),
            COLLECTIONLISTSTATUS("search-collection-list-status-xml"),
            COLLECTIONLIST("search-collection-list-xml");

            private String value;

        }

        @NoArgsConstructor
        @AllArgsConstructor
        @Getter
        public enum pages {

            MAXDOCUMENTS(50),
            NUM(200);

            private int value;

        }
    }

}