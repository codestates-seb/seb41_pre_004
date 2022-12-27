package com.preproject.backend.domain.answer.dto;

import com.preproject.backend.domain.comment.dto.CommentDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

public class AnswerDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotNull
        @Size(min = 10, message = "10글자 이상 입력하세요.")
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private long answerId;
        @NotNull
        @Size(min = 10, message = "10글자 이상 입력하세요.")
        private String content;
    }

    @Getter
    @Builder
    @AllArgsConstructor
    public static class Response {
        private long answerId;
        private long questionId;
        private String content;
        private long voteAnswer;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private List<CommentDto.Response> comments;

    }
}
