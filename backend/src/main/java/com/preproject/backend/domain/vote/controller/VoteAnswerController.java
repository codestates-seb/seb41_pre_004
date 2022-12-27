package com.preproject.backend.domain.vote.controller;

import com.preproject.backend.domain.vote.dto.VoteDto;
import com.preproject.backend.domain.vote.service.VoteService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/questions/{question-id}/answers/vote")
@Validated
@AllArgsConstructor
public class VoteAnswerController {
    private VoteService voteService;

    @PostMapping
    public ResponseEntity vote(@PathVariable(name = "answer-id") long answerId,
                               @Valid @RequestBody VoteDto.Post post) {
        VoteDto.Response response;
        if(post.getCount() == 1){
            response = voteService.answerUp(answerId);
        } else {
            response = voteService.answerDown(answerId);
        }
        return new ResponseEntity(response, HttpStatus.OK);
    }
}
