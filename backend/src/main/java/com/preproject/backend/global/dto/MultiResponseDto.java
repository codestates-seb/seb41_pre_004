package com.preproject.backend.global.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class MultiResponseDto<T> {
    private List<T> data;

    // TODO Pagenation 추가 --> Service 쪽 전체 조회 로직 수정
}
