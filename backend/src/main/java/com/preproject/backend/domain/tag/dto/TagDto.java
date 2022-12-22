package com.preproject.backend.domain.tag.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class TagDto {


    @Getter
    @Setter
    @AllArgsConstructor
    static public class Information{
        private String name;

        private int count;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    static public class Response {
        // TODO 나중에 추가할 것
    }
}
