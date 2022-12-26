package com.preproject.backend.domain.answer.mapper;

import com.preproject.backend.domain.answer.dto.AnswerDto;
import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
//    default Answer answerPostDtoToAnswer(int questionId, AnswerDto.Post answerPostDto) {
//        Answer answer = new Answer();
//        answer.setContent(answerPostDto.getContent());
//
//        Question question = new Question();
//        question.setQuestionId(questionId);
//        answer.setQuestion(question);
//
//        return answer;
//    }
    Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto);
    AnswerDto.Response answerToAnswerResponse(Answer answer);
    List<AnswerDto.Response> answersToAnswersResponses(List<Answer> answers);
}
