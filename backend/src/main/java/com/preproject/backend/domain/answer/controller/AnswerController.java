package com.preproject.backend.domain.answer.controller;

import com.preproject.backend.domain.answer.mapper.AnswerMapper;
import com.preproject.backend.domain.answer.service.AnswerService;
import com.preproject.backend.domain.member.dto.AnswerDto;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping(/questions/{question-id}/answers)
@Validated
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    // TODO answer 등록
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post requestBody) {
        return null;
    }

    // TODO answer 수정
    @PatchMapping("/{member-id}")
    public ResponseEntity patchAnswer(
            @PathVariable("member-id") @Positive int answer_id,
            @Valid @RequestBody AnswerDto.Patch requestBody) {
        return null;
    }

    // TODO answer 조회
    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(
            @PathVariable("answer-id") @Positive int answer_id) {
        return null;
    }

    // TODO answer 전체 조회
    @GetMapping
    public ResponseEntity getAnswers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        return null;
    }

    // TODO answer 삭제
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(
            @PathVariable("answer-id") @Positive int answer_id) {
        return null;
    }
}
