package com.employee.employee.extensions;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.employee.employee.entities.errorModel.ErrorDetails;
import com.employee.employee.entities.exceptions.NotFoundException;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<?> handleNotFoundException(NotFoundException ex,
            WebRequest request) {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(ErrorDetails.builder()
                        .statusCode(404)
                        .message(ex.getMessage())
                        .path(request.getDescription(false))
                        .build());
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
            HttpHeaders headers, HttpStatus status, WebRequest request) {

        Map<String, String> validationErrors = new HashMap<String, String>();
        for (FieldError fieldError : ex.getBindingResult().getFieldErrors()) {
            validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
        }

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(validationErrors);
    }
}
