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

import java.util.List;
import java.util.stream.Collectors;

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
    Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto);
    AnswerDto.Response answerToAnswerResponse(Answer answer);
    List<AnswerDto.Response> answersToAnswersResponses(List<Answer> answers);

//    default AnswerDto.Response answerToAnswerResponseDto(Answer answer) {
//        Member member = answer.getMember();
//        List<Comment> comments = answer.getComments();
//
//        List<CommentDto.Response> commentResponse
//                = comments.stream().map(comment ->
//                        new CommentDto.Response(comment.getCommentId(),
//                                comment.getContent(),
//                                comment.getCreatedAt(),
//                                comment.getModifiedAt()))
//                .collect(Collectors.toList());
//
//        return AnswerDto.Response.builder()
//                .answerId(answer.getAnswerId())
//                .questionId(answer.getQuestion().getQuestionId())
//                .content(answer.getContent())
//                .voteAnswer(answer.getVoteAnswers())
//                .createdAt(answer.getCreatedAt())
//                .modifiedAt(answer.getModifiedAt())
//                .build();
//    }

    MemberDto.Response memberToMemberResponseDto(Member member);
}
