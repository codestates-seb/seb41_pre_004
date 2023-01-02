package com.preproject.backend.domain.tag.service;

import com.preproject.backend.domain.tag.entity.TagEntity;
import com.preproject.backend.domain.tag.repository.TagRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class TagService {
    private TagRepository tagRepository;
    public Page<TagEntity> findTags(int page, int size) {
        return tagRepository.findAll(
                PageRequest.of(page,size,Sort.by("tagId").descending())
        );
    }

}
