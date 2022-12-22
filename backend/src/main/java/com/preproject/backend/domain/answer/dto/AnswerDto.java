package com.preproject.backend.domain.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class AnswerDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotBlank
        @Size(min = 10, message = "10글자 이상 입력하세요.")
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private int answer_id;
        @NotBlank
        @Size(min = 10, message = "10글자 이상 입력하세요.")
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private int answer_id;
        private String content;
        private String score;
    }
}
