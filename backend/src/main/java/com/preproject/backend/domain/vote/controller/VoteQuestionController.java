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
@RequestMapping("/questions/vote")
@Validated
@AllArgsConstructor
public class VoteQuestionController {
//    private VoteService voteService;
//
//    @PostMapping
//    public ResponseEntity vote(@PathVariable(name = "question-id") int questionId,
//                               @Valid @RequestBody VoteDto.Post post) {
//        VoteDto.Response response;
//        if (post.getCount() == 1) {
//            response = voteService.questionUp(questionId);
//        } else {
//            response = voteService.questionDown(questionId);
//        }
//        return new ResponseEntity(response, HttpStatus.OK);
//    }
}
