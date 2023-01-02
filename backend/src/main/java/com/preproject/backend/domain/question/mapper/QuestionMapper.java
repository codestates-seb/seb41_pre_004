package com.preproject.backend.domain.question.mapper;

import com.preproject.backend.domain.question.dto.QuestionDto;
import com.preproject.backend.domain.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post post);
    Question questionPatchDtoToQuestion(QuestionDto.Patch patch);
    QuestionDto.Response questionToResponseCheck(Question question);
    List<QuestionDto.Response> questionsToResponses(List<Question> questions);
}
