package com.preproject.backend.domain.comment.mapper;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.comment.dto.CommentDto;
import com.preproject.backend.domain.comment.entity.Comment;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
//    Comment commentPostDtoToComment(CommentDto.Post commentPostDto);
    default Comment commentPostDtoToComment(CommentDto.Post commentPostDto, long answerId) {
        Comment comment = new Comment();
        comment.setContent(commentPostDto.getContent());

        Answer answer = new Answer();
        answer.setAnswerId(answerId);
        comment.setAnswer(answer);

        return comment;
    }
    Comment commentPatchDtoToComment(CommentDto.Patch commentPatchDto);
    CommentDto.Response commentToCommentResponse(Comment comment);
    List<CommentDto.Response> commentsToCommentsResponses(List<Comment> comments);
}