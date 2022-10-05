package com.sdg.cognitive_poc.controller.utils;

import com.sdg.cognitive_poc.utils.Constants;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;

@Slf4j
public class BaseController {


    protected <T> ResponseEntity<TypedResult<T>> handleSuccess(T results) {

        TypedResult<T> response = TypedResult.<T>builder()
                .timestamp(LocalDateTime.now())
                .message(Constants.Result.Message.SUCCESS_MESSAGGE)
                .status(HttpStatus.OK.value())
                .result(results)
                .build();

        if (results != null)
            return ResponseEntity.ok().body(response);
        else
            return handleNoContentStatus();

    }


    protected <T> ResponseEntity<TypedResult<T>> handleException(String method, Exception exception, HttpStatus httpStatus) {

        log.error("URL: " + method, exception);

        TypedResult<T> response = TypedResult.<T>builder()
                .timestamp(LocalDateTime.now())
                .message(exception.getMessage())
                .status(httpStatus.value())
                .build();

        return ResponseEntity.status(httpStatus).body(response);

    }

    protected <T> ResponseEntity<TypedResult<T>> handleException(String method, Exception exception) {

        if (exception instanceof IllegalArgumentException)
            return handleException(method, exception, HttpStatus.BAD_REQUEST);
        return handleException(method, exception, HttpStatus.INTERNAL_SERVER_ERROR);

    }


    protected <T> ResponseEntity<TypedResult<T>> handleStatus(T results, HttpStatus httpsStatus, String message) {

        TypedResult<T> response = TypedResult.<T>builder()
                .timestamp(LocalDateTime.now())
                .result(results)
                .message(message)
                .status(httpsStatus.value())
                .build();

        return ResponseEntity.status(httpsStatus).body(response);

    }

    protected <T> ResponseEntity<TypedResult<T>> handleNoContentStatus() {

        return ResponseEntity.noContent().build();

    }

    protected <T> ResponseEntity<TypedResult<T>> handleStatus(HttpStatus httpsStatus, String message) {

        return handleStatus(null, httpsStatus, message);

    }

    protected <T> ResponseEntity<TypedResult<T>> handleStatus(HttpStatus httpsStatus) {

        return handleStatus(httpsStatus, httpsStatus.getReasonPhrase());

    }

}

