package com.preproject.backend.domain.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotNull(message = "이름은 공백이 아니어야 합니다.")
        private String name;

        @NotNull(message = "이메일은 공백이 아니어야 합니다.")
        @Email
        private String email;

        @NotNull(message = "비밀번호는 공백이 아니어야 합니다.")
        private String password;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private long memberId;

        @NotNull(message = "이름은 공백이 아니어야 합니다.")
        private String name;

        @NotNull(message = "이메일은 공백이 아니어야 합니다.")
        @Email
        private String email;

        @NotNull(message = "비밀번호는 공백이 아니어야 합니다.")
        private String password;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long memberId;
        private String name;
        private String email;
        private String password;
        private LocalDateTime createdAt;
        private LocalDateTime ModifiedAt;
    }
}
