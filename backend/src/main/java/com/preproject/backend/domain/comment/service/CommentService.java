package com.preproject.backend.domain.comment.service;

import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.comment.repository.CommentRepository;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.global.exception.BusinessLogicException;
import com.preproject.backend.global.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    //private final PasswordEncoder passwordEncoder; // security

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    // TODO comment 등록
    public Comment createComment(Comment comment) {
        return null;
    }

    // TODO comment 수정
    public Comment updateComment(Comment comment) {
        return null;
    }

    // TODO comment 조회
    public Comment findComment(int comment_id) {
        return null;
    }

    // TODO comment 전체 조회
    public Page<Comment> findComments(int page, int size) {
        return null;
    }

    // TODO comment 삭제
    public void deleteComment(int comment_id) {

    }

    // TODO member_id로 검색해 자기가 쓴 comment 조회하고 없으면 exception 남기는 메서드 추가
}
