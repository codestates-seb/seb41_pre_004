package com.preproject.backend.domain.comment.controller;

import com.preproject.backend.domain.comment.dto.CommentDto;
import com.preproject.backend.domain.comment.mapper.CommentMapper;
import com.preproject.backend.domain.comment.service.CommentService;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/question/{question-id}/answers/{answer-id}/comments")
@Validated
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper mapper;

    public CommentController(CommentService commentService, CommentMapper mapper) {
        this.commentService = commentService;
        this.mapper = mapper;
    }

    // TODO comment 등록
    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentDto.Post requestBody) {
        return null;
    }

    // TODO comment 수정
    @PatchMapping("/{comment-id}")
    public ResponseEntity patchComment(
            @PathVariable("comment-id") @Positive long comment_id,
            @Valid @RequestBody CommentDto.Patch requestBody) {
        return null;
    }

    // TODO comment 조회
    @GetMapping("/{comment-id}")
    public ResponseEntity getComment(
            @PathVariable("comment-id") @Positive int memberId) {
        return null;
    }

    // TODO comment 전체 조회
    @GetMapping
    public ResponseEntity getComments(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        return null;
    }

    // TODO comment 삭제
    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment(
            @PathVariable("comment-id") @Positive int comment_id) {
        return null;
    }
}
