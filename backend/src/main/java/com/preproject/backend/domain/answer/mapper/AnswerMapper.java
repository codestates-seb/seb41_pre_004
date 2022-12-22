package com.preproject.backend.domain.answer.mapper;

import com.preproject.backend.domain.answer.dto.AnswerDto;
import com.preproject.backend.domain.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto);
    Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto);
    AnswerDto.Response answerToCommentResponse(Answer answer);
    List<AnswerDto.Response> answersToAnswersResponses(List<Answer> answers);
}
