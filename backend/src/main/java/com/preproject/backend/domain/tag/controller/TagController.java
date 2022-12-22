package com.preproject.backend.domain.tag.controller;

import com.preproject.backend.domain.tag.mapper.TagMapper;
import com.preproject.backend.domain.tag.service.TagService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("Tags")
@Validated
@AllArgsConstructor
public class TagController {
    private final TagService tagService;
    private final TagMapper tagMapper;
    // TODO Question관련 추가

    @GetMapping
    public ResponseEntity getTags(){ // TODO 입력 변수 확인하기 (페이지네이션 포함)

        // TODO 태그들 검색
        // TODO 페이지 구성

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
