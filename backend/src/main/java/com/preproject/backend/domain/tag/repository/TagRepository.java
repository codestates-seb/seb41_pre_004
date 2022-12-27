package com.preproject.backend.domain.tag.repository;

import com.preproject.backend.domain.tag.entity.TagEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TagRepository extends JpaRepository<TagEntity, Integer> {
//    Optional<TagEntity> findByName(String name);
//
//    Page<TagEntity> findByNameIncluded(String name, Pageable pageable);
}