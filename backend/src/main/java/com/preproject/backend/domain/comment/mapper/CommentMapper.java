package com.preproject.backend.domain.comment.mapper;

import com.preproject.backend.domain.answer.dto.AnswerDto;
import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.comment.dto.CommentDto;
import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.member.entity.Member;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    Comment commentPostDtoToComment(CommentDto.Post commentPostDto);
    default Comment commentPostDtoToComment(CommentDto.Post commentPostDto, long answerId) {
        Comment comment = new Comment();
        comment.setContent(commentPostDto.getContent());

        Answer answer = new Answer();
        answer.setAnswerId(answerId);
        comment.setAnswer(answer);

        return comment;
    }
    Comment commentPatchDtoToComment(CommentDto.Patch commentPatchDto);
    //CommentDto.Response commentToCommentResponse(Comment comment);
    default CommentDto.Response commentToCommentResponse(Comment comment) {
        if (comment == null) {
            return null;
        }
        long commentId;
        long answerId;
        String username;
        String content;
        LocalDateTime createdAt;
        LocalDateTime modifiedAt;

        commentId = comment.getCommentId();
        answerId = comment.getAnswer().getAnswerId();
        username = comment.getMember().getName();
        content = comment.getContent();
        createdAt = comment.getCreatedAt();
        modifiedAt = comment.getModifiedAt();

        CommentDto.Response response = new CommentDto.Response(commentId,answerId,username,content,createdAt,modifiedAt);

        return response;
    }
    List<CommentDto.Response> commentsToCommentsResponses(List<Comment> comments);
}