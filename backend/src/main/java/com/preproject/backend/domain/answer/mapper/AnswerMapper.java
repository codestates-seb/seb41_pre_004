package com.preproject.backend.domain.answer.mapper;

import com.preproject.backend.domain.answer.dto.AnswerDto;
import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.comment.dto.CommentDto;
import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.member.dto.MemberDto;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.question.entity.Question;
import lombok.Builder;
import org.mapstruct.Mapper;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer(long questionId, AnswerDto.Post answerPostDto) {
        Answer answer = new Answer();
        answer.setContent(answerPostDto.getContent());

        Question question = new Question();
        question.setQuestionId(questionId);
        answer.setQuestion(question);

        return answer;
    }

    Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto);
    default AnswerDto.Response answerToAnswerResponse(Answer answer) {
        if (answer == null) {
            return null;
        }
        long answerId;
        long questionId;
        String userName;
        String userEmail;
        String content;
//        long voteAnswer; // TODO voteAnswer 기본 구현 이후
        LocalDateTime createdAt;
        LocalDateTime modifiedAt;

        answerId = answer.getAnswerId();
        questionId = answer.getQuestion().getQuestionId();
        userName = answer.getMember().getName();
        userEmail = answer.getMember().getEmail();
        content = answer.getContent();
        createdAt = answer.getCreatedAt();
        modifiedAt = answer.getModifiedAt();

        List<CommentDto.Response> comments = answer.getComments().stream()
                .map(comment -> new CommentDto.Response(comment.getCommentId(), comment.getAnswer().getAnswerId(), comment.getMember().getName(),
                        comment.getMember().getEmail(), comment.getContent(), comment.getCreatedAt(), comment.getModifiedAt()))
                .collect(Collectors.toList());

        AnswerDto.Response response = new AnswerDto.Response(answerId,questionId,userName,userEmail,content,createdAt,modifiedAt,comments);

        return response;
    }

    default List<AnswerDto.Response> answersToAnswersResponses(List<Answer> answers){

        List<AnswerDto.Response> responses = answers.stream()
                .map(this::answerToAnswerResponse)
                .collect(Collectors.toList());

        return responses;
    }
}
