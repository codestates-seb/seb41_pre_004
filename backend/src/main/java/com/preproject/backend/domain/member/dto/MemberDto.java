package com.preproject.backend.domain.member.dto;

import com.preproject.backend.domain.member.entity.MemberStatus;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class MemberDto {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class Response {
        private Long memberId;
        private String displayName;
        private String email;
        private MemberStatus memberStatus;
        private LocalDateTime createdAt;
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
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private int memberId;

        @NotBlank(message = "이름은 공백이 아니어야 합니다.")
        private String name;

        @NotBlank(message = "비밀번호는 공백이 아니어야 합니다.")
        private String password;
    }
}