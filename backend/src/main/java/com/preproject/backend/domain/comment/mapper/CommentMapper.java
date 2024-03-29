package com.preproject.backend.domain.comment.mapper;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.comment.dto.CommentDto;
import com.preproject.backend.domain.comment.entity.Comment;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    default Comment commentPostDtoToComment(CommentDto.Post commentPostDto, long answerId) {
        Comment comment = new Comment();
        comment.setContent(commentPostDto.getContent());

        Answer answer = new Answer();
        answer.setAnswerId(answerId);
        comment.setAnswer(answer);

        return comment;
    }
    Comment commentPatchDtoToComment(CommentDto.Patch commentPatchDto);
    default CommentDto.Response commentToCommentResponse(Comment comment) {
        if (comment == null) {
            return null;
        }
        long commentId;
        long answerId;
        String userName;
        String userEmail;
        String content;
        LocalDateTime createdAt;
        LocalDateTime modifiedAt;

        commentId = comment.getCommentId();
        answerId = comment.getAnswer().getAnswerId();
        userName = comment.getMember().getName();
        userEmail = comment.getMember().getEmail();
        content = comment.getContent();
        createdAt = comment.getCreatedAt();
        modifiedAt = comment.getModifiedAt();

        CommentDto.Response response = new CommentDto.Response(commentId,answerId,userName,userEmail,content,createdAt,modifiedAt);

        return response;
    }
    List<CommentDto.Response> commentsToCommentsResponses(List<Comment> comments);
}