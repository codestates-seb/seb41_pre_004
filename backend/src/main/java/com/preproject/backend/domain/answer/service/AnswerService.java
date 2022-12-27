package com.preproject.backend.domain.answer.service;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.answer.repository.AnswerRepository;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.member.service.MemberService;
import com.preproject.backend.domain.question.service.QuestionService;
import com.preproject.backend.global.exception.BusinessLogicException;
import com.preproject.backend.global.exception.ExceptionCode;
import com.preproject.backend.global.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    private final QuestionService questionService;
    private final CustomBeanUtils<Answer> beanUtils;
    //private final PasswordEncoder passwordEncoder; // security

    // answer 등록
    public Answer createAnswer(Answer answer, long questionId) {
        //answer.setMember(memberService.getLoginMember()); // TODO memberService.getLoginMember() 완성 후 하기
        Member member = memberService.findVerifiedMember(answer.getMember().getMemberId()); // member 존재한느지 검증
        return answerRepository.save(answer);
    }

    // answer 수정
    public Answer updateAnswer(long memberId, Answer answer) { // patchAnswer == 수정될 answer
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        verifyWriter(memberId, answer.getMember().getMemberId());

        beanUtils.copyNonNullProperties(answer, findAnswer);

        return answerRepository.save(findAnswer);
    }

    // answer 조회
    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
    }

    // answer 전체 조회
    public Page<Answer> findAnswers(long questionId, int page, int size) {
        return answerRepository.findAll(PageRequest.of(page, size,
                Sort.by("answerId").descending()));
    }

    // answer 삭제
    public void deleteAnswer(long memberId, Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        verifyWriter(memberId, answer.getMember().getMemberId());

        answerRepository.delete(findAnswer);
    }

    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);

        return optionalAnswer.orElseThrow(() -> {
            return new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
        });
    }

    // 해당 answer 를 쓴 사람과 요청으로 들어오는 member(수정하려는 사람)가 일치하는지 알아보는 로직
    public void verifyWriter(Long postMemberId, Long editMemberId) {
        if (!postMemberId.equals(editMemberId)) {
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_MEMBER);
        }
    }
}
