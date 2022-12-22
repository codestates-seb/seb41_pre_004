package com.preproject.backend.domain.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class CommentDto {
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
