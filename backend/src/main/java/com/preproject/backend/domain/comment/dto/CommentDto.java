package com.preproject.backend.domain.comment.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

public class CommentDto {
    @Getter
    @NoArgsConstructor
    public static class Post {
        @NotNull
        @Size(min = 10, message = "10글자 이상 입력하세요.")
        private String content;

        public Post(String content) {
            this.content = content;
        }
    }

    @Getter
    @Setter
    @Builder
    @AllArgsConstructor
    public static class Patch {
        private long commentId;
        @NotNull
        @Size(min = 10, message = "10글자 이상 입력하세요.")
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long commentId;
        private long answerId;
        private String username;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
