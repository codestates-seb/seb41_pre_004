package com.preproject.backend.domain.tag.controller;

import com.preproject.backend.domain.tag.entity.TagEntity;
import com.preproject.backend.domain.tag.mapper.TagMapper;
import com.preproject.backend.domain.tag.service.TagService;
import com.preproject.backend.global.dto.MultiResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("Tags")
@Validated
@AllArgsConstructor
public class TagController {
    private final TagService tagService;
    private final TagMapper tagMapper;

    @GetMapping
    public ResponseEntity getTags(@RequestParam(name = "tagName") String tagName,
            @Positive @RequestParam(name = "page", defaultValue = "1") int page,
            @Positive @RequestParam(name = "page", defaultValue = "15") int size) {
        Page<TagEntity> pageTag =
                tagService.findTags(page -1 , size);
        List<TagEntity> tags = pageTag.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(tagMapper.tagToResponse(tags), pageTag), HttpStatus.OK);
    }
}
