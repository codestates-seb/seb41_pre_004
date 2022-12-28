package com.preproject.backend.domain.comment.controller;

import com.preproject.backend.domain.comment.dto.CommentDto;
import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.comment.mapper.CommentMapper;
import com.preproject.backend.domain.comment.service.CommentService;
import com.preproject.backend.global.dto.MultiResponseDto;
import com.preproject.backend.global.dto.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/question/{question-id}/answers/{answer-id}/comments")
@RequiredArgsConstructor
@Validated
public class CommentController {
    private final CommentService commentService;
    private final CommentMapper mapper;

    // comment 등록
    @PostMapping
    public ResponseEntity postComment(//@PathVariable("question-id") @Positive long questionId,
                                      @PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody CommentDto.Post requestBody) {
        Comment createComment = commentService.createComment(mapper.commentPostDtoToComment(requestBody, answerId));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.commentToCommentResponse(createComment)), HttpStatus.CREATED);
    }

    // comment 수정
    @PatchMapping("/{comment-id}")
    public ResponseEntity patchComment(@PathVariable("question-id") @Positive long questionId,
                                       @PathVariable("answer-id") @Positive long answerId,
                                       @PathVariable("comment-id") @Positive long commentId,
                                       @Valid @RequestBody CommentDto.Patch requestBody) {
        requestBody.setCommentId(commentId);
        Comment comment = mapper.commentPatchDtoToComment(requestBody);
        Comment updateComment = commentService.updateComment(comment);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.commentToCommentResponse(updateComment)), HttpStatus.CREATED);
    }

    // comment 조회
    @GetMapping("/{comment-id}")
    public ResponseEntity getComment(@PathVariable("question-id") @Positive long questionId,
                                     @PathVariable("answer-id") @Positive long answerId,
                                     @PathVariable("comment-id") @Positive long commentId) {
        Comment findcomment = commentService.findComment(commentId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.commentToCommentResponse(findcomment)),HttpStatus.OK);
    }

    // comment 전체 조회
    @GetMapping
    public ResponseEntity getComments(@PathVariable("question-id") @Positive long questionId,
                                      @PathVariable("answer-id") @Positive long answerId,
                                      @Positive @RequestParam int page,
                                      @Positive @RequestParam int size) {
        Page<Comment> pageMembers = commentService.findComments(page - 1, size);
        List<Comment> comments = pageMembers.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.commentsToCommentsResponses(comments),pageMembers), HttpStatus.OK);
    }

    // TODO 해당 comment 를 쓴 member 의 Id 로 작성했던 comment 들을 전체 조회하는 로직

    // comment 삭제
    @DeleteMapping("/{comment-id}")
    public ResponseEntity deleteComment(@PathVariable("question-id") @Positive long questionId,
                                        @PathVariable("answer-id") @Positive long answerId,
                                        @PathVariable("comment-id") @Positive long commentId) {
        commentService.deleteComment(commentId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
