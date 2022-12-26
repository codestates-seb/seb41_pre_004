package com.preproject.backend.domain.vote.dto;

import com.preproject.backend.global.utils.validation.PlusMinusOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class VoteDto {
    @Getter
    @Setter
    public static class Post {
        @PlusMinusOne
        // +1과 -1만 받아드리게 될 것이니
        private int count;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        //TODO 여기에 들어갈 거 생각하기
        private String check;
        private String msg;
    }
}
