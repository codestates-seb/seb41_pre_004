package com.preproject.backend.domain.comment.repository;

import com.preproject.backend.domain.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}