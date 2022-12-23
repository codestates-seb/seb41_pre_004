package com.preproject.backend.domain.comment.repository;

import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
    //Optional<Comment> findByEmail(String email); // 하려고 했는데 comment에는 email이 없음
}
