package com.preproject.backend.domain.tag.service;

import com.preproject.backend.domain.tag.entity.TagEntity;
import com.preproject.backend.domain.tag.repository.TagRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class TagService {
    private TagRepository tagRepository;

    public TagEntity createTag(String name){
        String tagName = name.trim().toLowerCase();
        Optional<TagEntity> optionalTagEntity = tagRepository.findByName(tagName);

        TagEntity tag = new TagEntity();
        tag.setName(tagName);

        return tagRepository.save(tag);
    }

    public TagEntity updateTag(String name){
        String tagName = name.trim().toUpperCase();
        Optional<TagEntity> optionalTagEntity = tagRepository.findByName(tagName);

        TagEntity tag = optionalTagEntity.get();
        // TODO tag count + 1

        return tagRepository.save(tag);
    }

    //TODO 페이지네이션
}
