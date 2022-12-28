package com.preproject.backend.domain.answer.dto;

import com.preproject.backend.domain.comment.dto.CommentDto;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

public class AnswerDto {
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
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {
        private long answerId;
        @NotNull
        @Size(min = 10, message = "10글자 이상 입력하세요.")
        private String content;

        public void setAnswerId(long answerId) {
            this.answerId = answerId;
        }
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Response {
        private long answerId;
        private String content;
        private long voteAnswer;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private List<CommentDto.Response> comments;

    }
}
