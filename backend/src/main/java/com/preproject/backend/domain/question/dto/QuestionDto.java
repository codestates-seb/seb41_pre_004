package com.preproject.backend.domain.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {
        @NotBlank(message = "제목을 입력해주세요.")
        private String title;

        @NotBlank(message = "내용을 입력해주세요.")
        private String content;

        private List<String> tags;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        @NotBlank(message = "제목을 입력해주세요.")
        private String title;

        @NotBlank(message = "내용을 입력해주세요.")
        private String content;

        private List<String> tags;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private long questionId;
        private String title;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private int score;

        private List<String> tags;

        private int viewCount;
        //TODO 이후 추가할 것
        // 어떤 사용자인지 (member) 답변 list, [조회수, 답변 갯수] --> 테이블 명세서 추가 예정
    }

    @Getter
    @Setter
    public static class ResponseCheck {
        private int Id;
    }
}
