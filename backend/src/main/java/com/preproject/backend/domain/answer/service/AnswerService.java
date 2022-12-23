package com.preproject.backend.domain.answer.service;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.answer.repository.AnswerRepository;
import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.comment.repository.CommentRepository;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.global.exception.BusinessLogicException;
import com.preproject.backend.global.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnswerService {
//    private final AnswerRepository answerRepository;
//    //private final PasswordEncoder passwordEncoder; // security
//
//    public AnswerService(AnswerRepository answerRepository) {
//        this.answerRepository = answerRepository;
//    }
//
//    // answer 등록
//    public Answer createAnswer(Answer answer) {
//        return answerRepository.save(answer); // 그냥 바로 등록
//    }
//
//    // TODO answer 수정
//    public Answer updateAnswer(Answer answer) {
//        verifyExistsEmail(answer.getMember().getEmail()); // answer 을 적은 member 의 email 을 가져옴
//        return null;
//    }
//
//    // TODO answer 조회
//    public Answer findAnswer(int answerId) {
//        return null;
//    }
//
//    // TODO answer 전체 조회
//    public List<Answer> findAnswers() {
//        return answerRepository.findAll();
//    }
//
//    // TODO answer 삭제
//    public void deleteAnswer(int answerId) {
//        // TODO 해당 answer을 등록한 memberId로 조회하여 그 answer 삭제
//        //Answer findAnswer = findVerifiedMember(member_id);
//
//        //answerRepository.delete(findAnswer);
//    }
//
//    // TODO memberId로 검색해 자기가 쓴 answer 조회하고 없으면 exception 남기는 메서드 추가 / But, 아래 로직으로 email로 해도 될 것 같기도 함
//
//    public Answer findVerifiedAnswer(String email) {
//        Optional<Answer> optionalAnswer =
//                answerRepository.findByEmail(email);
//
//        return optionalAnswer.orElseThrow(() -> {
//            return new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
//        });
//    }
//
//    // email 이 존재하지 않으면 exception 을 남기는 로직
//    // -> But, 결국은 어차피 위에서 이미 없으면 exception 반환하기 때문에 없어도 될 것 같기도 하고..
//    // 근데 또 리턴 타입이 달라서 있어야 될 것 같기도 하고..
//    private void verifyExistsEmail(String email) {
//        Optional<Answer> answer = answerRepository.findByEmail(email);
//        if (answer.isEmpty()) // 문자열의 길이가 0인 경우 // isBlank() - 문자열이 비어있거나, 빈 공백으로 이루어진 경우
//            throw new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
//    }
}
