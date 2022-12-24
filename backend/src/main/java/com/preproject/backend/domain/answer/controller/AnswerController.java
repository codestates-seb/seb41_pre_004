package com.preproject.backend.domain.answer.controller;

import com.preproject.backend.domain.answer.dto.AnswerDto;
import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.answer.mapper.AnswerMapper;
import com.preproject.backend.domain.answer.service.AnswerService;
import com.preproject.backend.global.dto.MultiResponseDto;
import com.preproject.backend.global.dto.SingleResponseDto;
import org.springframework.data.domain.Page;
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
        Answer createAnswer = answerService.createAnswer(answer.getMember().getMemberId(), answer.getQuestion().getQuestionId(), answer);
        // TODO 여기 questionService 검증 로직 나오면 완성하기

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponse(createAnswer)), HttpStatus.CREATED);
    }

    // answer 수정
    @PatchMapping("/{member-id}")
    public ResponseEntity patchAnswer(
            @PathVariable("member-id") @Positive int answerId,
            @Valid @RequestBody AnswerDto.Patch requestBody) {
        requestBody.setAnswerId(answerId);
        Answer answer = mapper.answerPatchDtoToAnswer(requestBody);
        Answer updateAnswer = answerService.updateAnswer(answer.getMember().getMemberId(), answer);
        // TODO 여기서 security 가 추가된 후,
        //  인증된 객체를 가져올 수 있도록 파라미터에 넣고, 거기서 getMemberId() 를 그 인증된 객체에서 가져올 수 있음

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponse(updateAnswer)), HttpStatus.CREATED);
    }

    // answer 조회
    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(
            @PathVariable("answer-id") @Positive int answerId) {
        Answer answer = answerService.findAnswer(answerId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponse(answer)),HttpStatus.OK);
    }

    // answer 전체 조회
    @GetMapping
    public ResponseEntity getAnswers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Answer> pageAnswer = answerService.findAnswers(page - 1, size);
        List<Answer> answers = pageAnswer.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.answersToAnswersResponses(answers), pageAnswer), HttpStatus.OK);
    }
    // TODO 해당 answer 를 쓴 member 의 Id 로 작성했던 answer 들을 전체 조회하는 로직

    // answer 삭제
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(
            @PathVariable("answer-id") @Positive int answerId) {
        //answerService.deleteAnswer(answerId, 검증된 객체를 가져오고 getMemberId());
        // TODO 여기서 security 가 추가된 후,
        //  인증된 객체를 가져올 수 있도록 파라미터에 넣고, 거기서 getMemberId() 를 그 인증된 객체에서 가져올 수 있음

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}