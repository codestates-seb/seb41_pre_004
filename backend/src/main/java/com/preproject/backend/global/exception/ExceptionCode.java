package com.preproject.backend.global.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists"),
    COFFEE_NOT_FOUND(404, "Answer not found"),
    ORDER_NOT_FOUND(404, "Question not found"),
    TAG_NOT_FOUND(404, "Tag not found"),
    MEMBER_UNAUTHORIZED(403, "Member unauthorized"),
    NOT_IMPLEMENTATION(501, "Not Implementation");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
