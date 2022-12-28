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
//    private TagRepository tagRepository;
//
//    public TagEntity tagCreateUpdate(String name){
//        String tagName = name.trim().toLowerCase();
//        Optional<TagEntity> optionalTagEntity = tagRepository.findByName(tagName);
//        if(!optionalTagEntity.isPresent()) {
//            TagEntity tag = new TagEntity();
//            tag.setName(tagName);
//            return tagRepository.save(tag);
//        }
//        TagEntity tag = optionalTagEntity.get();
//        tag.questionCountPlus();
//        return tagRepository.save(tag);
//    }
//
//    public Page<TagEntity> findTags(String tagName, int page, int size, Sort sort) {
//        PageRequest pageRequest = PageRequest.of(page, size, sort);
//        Page<TagEntity> tags = tagRepository.findByNameIncluded(tagName.trim().toLowerCase(), pageRequest);
//
//        return tags;
//    }

}
