package com.preproject.backend.domain.vote.service;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.answer.service.AnswerService;
import com.preproject.backend.domain.question.entity.Question;
import com.preproject.backend.domain.question.service.QuestionService;
import com.preproject.backend.domain.vote.dto.VoteDto;
import com.preproject.backend.domain.vote.entity.VoteQuestion;
import com.preproject.backend.domain.vote.repository.VoteAnswerRepository;
import com.preproject.backend.domain.vote.repository.VoteQuestionRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class VoteService {
    private QuestionService questionService;
    private AnswerService answerService;
    private VoteQuestionRepository voteQuestionRepository;
    private VoteAnswerRepository voteAnswerRepository;
    // TODO 로그인 관련 변수 입력

    public VoteDto.Response questionUp(long questionId) {
        VoteQuestion voteQuestion = getVoteQuestion(questionId);
        if(voteQuestion.getCount() <= -1 ) {
            // case 1. 아래 버튼이 눌린 상태
            voteQuestion.questionCountPlus();
        } else if (voteQuestion.getCount() >= 1) {
            // case 2. 이미 위 버튼이 눌린 상태

        } else { // 0
            // 아무 버튼도 안 눌린 상태
        }
    }

    public VoteDto.Response questionDown(long questionId) {
        VoteQuestion voteQuestion = getVoteQuestion(questionId);
        // 그 버튼이 이미 눌려 있다면 취소하기
    }

    public VoteDto.Response answerUp(long answerId) {

    }

    public VoteDto.Response answerDown(long answerId) {

    }


    private <T extends Answer | Question> void scoreUpDown(T s, int ) {

    }

}
