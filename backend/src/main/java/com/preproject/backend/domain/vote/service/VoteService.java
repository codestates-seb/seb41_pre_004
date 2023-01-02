package com.preproject.backend.domain.vote.service;

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

import java.util.Optional;

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
        switch (voteQuestion.getCount()) {
            case -1:
                // case 1. 아래 버튼이 눌린 상태
                voteQuestion.questionCountPlus();
                questionScore(voteQuestion.getQuestion(), 2);
                voteQuestionRepository.save(voteQuestion);
                return new VoteDto.Response("추천했습니다.");
            case 1:
                // case 2. 이미 위 버튼이 눌린 상태
                return new VoteDto.Response("이미 추천했습니다.");
            default:
                // 0 // 아무 버튼도 안 눌린 상태
                voteQuestion.questionCountPlus();
                questionScore(voteQuestion.getQuestion(), 1);
                voteQuestionRepository.save(voteQuestion);
                return new VoteDto.Response("추천했습니다.");
        }
    }

    public VoteDto.Response questionDown(long questionId) {
        VoteQuestion voteQuestion = getVoteQuestion(questionId);
        switch (voteQuestion.getCount()){
            case 1: // 위 버튼이 눌린 상태
                voteQuestion.questionCountMinus();
                questionScore(voteQuestion.getQuestion(), -2);
                voteQuestionRepository.save(voteQuestion);
                return new VoteDto.Response("비추천했습니다.");
            case -1: // 이미 아래 버튼이 눌린 상태
                return new VoteDto.Response("이미 비추천했습니다.");
            default: // 아무 버튼도 안 눌린 상태
                voteQuestion.questionCountMinus();
                questionScore(voteQuestion.getQuestion(), -1);
                voteQuestionRepository.save(voteQuestion);
                return new VoteDto.Response("비추천했습니다.");
        }
    }

//    public VoteDto.Response answerUp(long answerId) {
//
//    }
//
//    public VoteDto.Response answerDown(long answerId) {
//
//    }

    private VoteQuestion getVoteQuestion(long questionId) {
        //TODO 인증된 멤버 정보 가져오기
        // Member member = ~~;
        Question question = questionService.readQuestion(questionId);

        //Optional<VoteQuestion> optionalVoteQuestion = voteQuestionRepository.findByQuestionMember(question, member);
        // 임시로 아래꺼 사용하기
        Optional<VoteQuestion> optionalVoteQuestion = voteQuestionRepository.findByQuestion(question);
        if(optionalVoteQuestion.isPresent()){
          return optionalVoteQuestion.get();
        } else {
            VoteQuestion voteQuestion = new VoteQuestion();
            voteQuestion.setQuestion(question);
            //voteQuestion.setMember(member);
            voteQuestion.setCount(0);
            return voteQuestion;
        }
    }

//    private void answerScore(Answer answer, int change) {
//        if(change > 0) answer.voteUp();
//        else answer.voteDown();
//    }

    private void questionScore(Question question, int change) {
        if(change > 0) question.voteUp(change);
        else question.voteDown(change);
    }

}
