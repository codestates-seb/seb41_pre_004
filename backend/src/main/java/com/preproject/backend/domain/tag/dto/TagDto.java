package com.preproject.backend.domain.tag.dto;

import com.preproject.backend.global.page.PageInfo;
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
        private PageInfo pageInfo;
        private List<Information> tags = new ArrayList<>();
    }
}
