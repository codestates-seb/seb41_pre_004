package com.preproject.backend.domain.answer.controller;

import com.preproject.backend.domain.answer.dto.AnswerDto;
import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.answer.mapper.AnswerMapper;
import com.preproject.backend.domain.answer.service.AnswerService;
import com.preproject.backend.global.dto.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions/{question-id}/answers")
@Validated
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    // answer 등록
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post requestBody) {
        Answer answer = mapper.answerPostDtoToAnswer(requestBody);
        Answer createAnswer = answerService.createAnswer(answer);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponse(createAnswer)), HttpStatus.CREATED);
    }

    // TODO answer 수정
    @PatchMapping("/{member-id}")
    public ResponseEntity patchAnswer(
            @PathVariable("member-id") @Positive int answer_id,
            @Valid @RequestBody AnswerDto.Patch requestBody) {
        return null;
    }

    // answer 조회
    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(
            @PathVariable("answer-id") @Positive int answer_id) {
        Answer answer = answerService.findAnswer(answer_id);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponse(answer)),HttpStatus.OK);
    }

    // TODO answer 전체 조회 - pagenation 추가
    @GetMapping
    public ResponseEntity getAnswers() {
        List<Answer> answers = answerService.findAnswers();

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answersToAnswersResponses(answers)), HttpStatus.OK);
    }

    // TODO answer 삭제
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(
            @PathVariable("answer-id") @Positive int answer_id) {
        Answer answer = answerService.deleteAnswer(answer_id); // TODO Service 로직 구현 후 다시 보기

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
