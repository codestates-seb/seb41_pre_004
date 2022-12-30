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
    //AnswerDto.Response answerToAnswerResponse(Answer answer);

//        default AnswerDto.Response answerToAnswerResponse(Answer answer) {
//            Member member = answer.getMember();
//            List<Comment> comments = answer.getComments();
//
//            List<CommentDto.Response> commentResponse
//                    = comments.stream().map(comment ->
//                            new CommentDto.Response(comment.getCommentId(),
//                                    comment.getContent(),
//                                    comment.getCreatedAt(),
//                                    comment.getModifiedAt()))
//                    .collect(Collectors.toList());
//
//            return AnswerDto.Response.builder()
//                    .answerId(answer.getAnswerId())
//                    .questionId(answer.getQuestion().getQuestionId())
//                    .content(answer.getContent())
////                .voteAnswer(answer.getVoteAnswers())
//                    .createdAt(answer.getCreatedAt())
//                    .modifiedAt(answer.getModifiedAt())
//                    .build();
//    }

    default AnswerDto.Response answerToAnswerResponse(Answer answer) {
        if (answer == null) {
            return null;
        }
        long answerId;
        long questionId;
        String currEmail;
        String content;
//        long voteAnswer; // TODO voteAnswer 기본 구현 이후
        LocalDateTime createdAt;
        LocalDateTime modifiedAt;

        answerId = answer.getAnswerId();
        questionId = answer.getQuestion().getQuestionId();
        currEmail = answer.getMember().getEmail();
        content = answer.getContent();
        createdAt = answer.getCreatedAt();
        modifiedAt = answer.getModifiedAt();

        List<CommentDto.Response> comments = answer.getComments().stream()
                .map(comment -> new CommentDto.Response(comment.getCommentId(), comment.getAnswer().getAnswerId(), comment.getMember().getEmail(), comment.getContent(), comment.getCreatedAt(), comment.getModifiedAt()))
                .collect(Collectors.toList());

        AnswerDto.Response response = new AnswerDto.Response(answerId,questionId,currEmail,content,createdAt,modifiedAt,comments);

        return response;
    }

    List<AnswerDto.Response> answersToAnswersResponses(List<Answer> answers);
    //MemberDto.Response memberToMemberResponseDto(Member member);
}
