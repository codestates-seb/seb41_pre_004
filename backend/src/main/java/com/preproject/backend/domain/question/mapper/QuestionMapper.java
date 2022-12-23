package com.preproject.backend.domain.question.mapper;

import com.preproject.backend.domain.question.dto.QuestionDto;
import com.preproject.backend.domain.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post post);
    Question questionPatchDtoToQuestion(QuestionDto.Patch patch);

    default QuestionDto.ResponseCheck questionToResponseCheck(Question question){
        QuestionDto.ResponseCheck response = new QuestionDto.ResponseCheck();
        response.setId(question.getQuestionId());
        return response;
    }
}
