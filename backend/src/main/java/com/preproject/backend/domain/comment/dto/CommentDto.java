package com.preproject.backend.domain.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

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
    @Builder
    @AllArgsConstructor
    public static class Patch {
        private long commentId;
        @NotBlank
        @Size(min = 10, message = "10글자 이상 입력하세요.")
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long commentId;
        private String content;
        //private String score;
        private LocalDateTime createdAt;
        private LocalDateTime ModifiedAt;
    }
}
