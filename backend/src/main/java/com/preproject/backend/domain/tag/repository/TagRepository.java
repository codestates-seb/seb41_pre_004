package com.preproject.backend.domain.tag.repository;

import com.preproject.backend.domain.tag.entity.TagEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<TagEntity, Long> {
    Page<TagEntity> findAll(Pageable pageable);
}