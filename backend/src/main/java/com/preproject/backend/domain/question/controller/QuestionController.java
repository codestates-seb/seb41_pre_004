package com.preproject.backend.domain.question.controller;

import com.preproject.backend.domain.answer.service.AnswerService;
import com.preproject.backend.domain.question.dto.QuestionDto;
import com.preproject.backend.domain.question.entity.Question;
import com.preproject.backend.domain.question.mapper.QuestionMapper;
import com.preproject.backend.domain.question.service.QuestionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/questions")
@Validated
@AllArgsConstructor
public class QuestionController {
//    private final QuestionService questionService;
//    private final QuestionMapper questionMapper;
//    private final AnswerService answerService;
//
//
//    //CREATE
//    @PostMapping
//    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post post) {
//        Question question = questionService.createQuestion( questionMapper.questionPostDtoToQuestion(post),
//                                                            post.getTags());
//        QuestionDto.ResponseCheck response = questionMapper.questionToResponseCheck(question);
//
//        return new ResponseEntity(response, HttpStatus.CREATED);
//    }
//
//    //READ
//    @GetMapping("/{question-id}")
//    public ResponseEntity getQuestion(@Positive @PathVariable("question-id") int questionId) {
//        Question question = questionService.readQuestion(questionId);
//        //TODO Answer 패키지 구현 이후 이곳으로 돌아올 것
//        // List<Answer> answers = answerService.getAnswer~~(question);
//
//    }
//    //TODO 전체 질문 목록 read (필터, 페이지네이션, 태그 검색)
//    // 클래스를 따로 만들어서 할 예정
//
//    //UPDATE
//    @PatchMapping("/{question-id}")
//    public ResponseEntity patchQuestion(@Positive @PathVariable("question-id") int questionId,
//                                        @Valid @RequestBody QuestionDto.Patch patch) {
//        Question question = questionService.updateQuestion( questionId,
//                                                    questionMapper.questionPatchDtoToQuestion(patch),
//                                                    patch.getTags());
//
//        QuestionDto.ResponseCheck response = questionMapper.questionToResponseCheck(question);
//        return new ResponseEntity(response, HttpStatus.CREATED);
//    }
//
//    //DELETE
//    @DeleteMapping("/{question-id}")
//    public ResponseEntity deleteQuestion(@Positive @PathVariable("question-id") int questionId) {
//        questionService.deleteQuestion(questionId);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }

}
