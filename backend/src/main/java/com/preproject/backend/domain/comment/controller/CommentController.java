package com.preproject.backend.domain.comment.controller;

import com.preproject.backend.domain.comment.dto.CommentDto;
import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.comment.mapper.CommentMapper;
import com.preproject.backend.domain.comment.service.CommentService;
import com.preproject.backend.global.dto.MultiResponseDto;
import com.preproject.backend.global.dto.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

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

    // comment 등록
    @PostMapping
    public ResponseEntity postComment(@Valid @RequestBody CommentDto.Post requestBody) {
        Comment comment = mapper.commentPostDtoToComment(requestBody);
        Comment createComment = commentService.createComment(comment);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.commentToCommentResponse(createComment)), HttpStatus.CREATED);
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

    // comment 전체 조회
    @GetMapping
    public ResponseEntity getComments() {
        List<Comment> comments = commentService.findComments();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.commentsToCommentsResponses(comments)), HttpStatus.OK);
    }

    // comment 삭제
    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment(
            @PathVariable("comment-id") @Positive int comment_id) {
        commentService.deleteComment(comment_id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
