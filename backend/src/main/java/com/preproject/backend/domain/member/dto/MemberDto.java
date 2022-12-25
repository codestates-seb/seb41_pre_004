package com.preproject.backend.domain.member.dto;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class MemberDto {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {
        private Long memberId;
        private String email;
        private String displayName;
    }
    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long memberId;

        @NotBlank
        private String displayName;


        public void setMemberId(long memberId) {
            this.memberId = memberId;
        }
    }


    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Post {
        @Email(message = "Email should not be empty.")
        @NotBlank
        private String email;

        @NotBlank
        private String password;

        @NotBlank
        private String displayName;
    }
}