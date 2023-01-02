package com.preproject.backend.domain.question.mapper;

import com.preproject.backend.domain.answer.dto.AnswerDto;
import com.preproject.backend.domain.comment.dto.CommentDto;
import com.preproject.backend.domain.question.dto.QuestionDto;
import com.preproject.backend.domain.question.entity.Question;
import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;

import java.time.LocalDateTime;
import java.util.Comparator;
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
        String userName;
        String userEmail;

        questionId = question.getQuestionId();
        title = question.getTitle();
        content = question.getContent();
        createdAt = question.getCreatedAt();
        modifiedAt = question.getModifiedAt();
        score = question.getScore();
        viewCount = question.getViewCount();
        userName = question.getMember().getName();
        userEmail = question.getMember().getEmail();

        List<AnswerDto.Response> answers = question.getAnswers().stream()
                .map(answer -> {
                    List<CommentDto.Response> comments = answer.getComments().stream()
                            .map(comment -> new CommentDto.Response(
                                    comment.getCommentId(),
                                    comment.getAnswer().getAnswerId(),
                                    comment.getMember().getName(),
                                    comment.getMember().getEmail(),
                                    comment.getContent(),
                                    comment.getCreatedAt(),
                                    comment.getModifiedAt()
                            ))
                            .sorted(Comparator.comparing(a -> a.getCommentId()))
                            .collect(Collectors.toList());
                    return new AnswerDto.Response(
                            answer.getAnswerId(),
                            answer.getQuestion().getQuestionId(),
                            answer.getMember().getName(),
                            answer.getMember().getEmail(),
                            answer.getContent(),
                            answer.getCreatedAt(),
                            answer.getModifiedAt(),
                            comments
                    );
                })
                .sorted(Comparator.comparing(a -> a.getAnswerId()))
                .collect(Collectors.toList());

        QuestionDto.Response response =
                new QuestionDto.Response(
                        questionId, title, content, createdAt, modifiedAt, score, viewCount, userName, userEmail, answers);

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

