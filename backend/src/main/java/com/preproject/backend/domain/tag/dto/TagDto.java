package com.preproject.backend.domain.tag.dto;

import com.preproject.backend.global.page.PageInfo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

public class TagDto {


    @Getter
    @Setter
    public static class Information{
        private String name;

        private int count;
    }

    @Getter
    @Setter
    public static class Response {
        //TODO 나중에 추가할 것
        // 태그의 정렬기준 관련 변수?
        private PageInfo pageInfo;
        private List<Information> tags = new ArrayList<>();
    }
}
