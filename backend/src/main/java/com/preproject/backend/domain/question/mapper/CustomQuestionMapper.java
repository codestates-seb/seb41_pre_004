package com.preproject.backend.domain.question.mapper;

import com.preproject.backend.domain.question.dto.QuestionDto;
import com.preproject.backend.domain.question.entity.Question;
import com.preproject.backend.domain.question.entity.QuestionTag;
import com.preproject.backend.domain.tag.entity.TagEntity;
import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
@Primary
public class CustomQuestionMapper implements QuestionMapper {
    // Implementation of the questionToResponseCheck method

    @Autowired
    private QuestionMapper questionMapper;

    @Override
    public Question questionPostDtoToQuestion(QuestionDto.Post post) {
        return questionMapper.questionPostDtoToQuestion(post);
    }
    @Override
    public Question questionPatchDtoToQuestion(QuestionDto.Patch patch){
        return questionMapper.questionPatchDtoToQuestion(patch);
    }
    @Override
    public QuestionDto.Response questionToResponseCheck(Question question) {
        if (question == null) {
            return null;
        }

        long questionId = 0L;
        String title = null;
        String content = null;
        LocalDateTime createdAt = null;
        LocalDateTime modifiedAt = null;
        int score = 0;
        int viewCount = 0;

        questionId = question.getQuestionId();
        title = question.getTitle();
        content = question.getContent();
        createdAt = question.getCreatedAt();
        modifiedAt = question.getModifiedAt();
        score = question.getScore();
        viewCount = question.getViewCount();

        // debugging purposes
        question.getQuestionTags().forEach(qt -> System.out.println("tag name: " + qt.getTag().getName()));

        List<String> tags = question.getQuestionTags().stream()
                .map(QuestionTag::getTag)
                .map(TagEntity::getName)
                .distinct()
                .collect(Collectors.toList());

        QuestionDto.Response response = new QuestionDto.Response( questionId, title, content, createdAt, modifiedAt, score, tags, viewCount );

        return response;
    }
    @Override
    public List<QuestionDto.Response> questionsToResponses(List<Question> questions) {

        List<QuestionDto.Response> responses = questions.stream()
                .map(this::questionToResponseCheck)
                .collect(Collectors.toList());

        System.out.println("responses: " + responses);

        return responses;
    }
}

