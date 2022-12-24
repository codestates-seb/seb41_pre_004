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
    public Answer createAnswer(int memberId, int questionId, Answer postAnswer) {
        //return answerRepository.save(answer); // 그냥 바로 등록
        Member member = memberService.findVerifiedMember(memberId);
        //Question question = questionService. // TODO 여기 questionService 검증 로직 나오면 완성하기
        //Answer createAnswer = Answer.toEntity(post.getContent(), member, question)

        //return answerRepository.save(createAnswer);
        return null;
    }

    // Tanswer 수정
    public Answer updateAnswer(int memberId, Answer patchAnswer) { // patchAnswer == 수정될 answer
        Answer findAnswer = findVerifiedAnswer(patchAnswer.getAnswerId());

        verifyWriter(memberId, patchAnswer.getMember().getMemberId());

        beanUtils.copyNonNullProperties(patchAnswer, findAnswer);

        return answerRepository.save(findAnswer);
    }

    // answer 조회
    public Answer findAnswer(int answerId) {
        return findVerifiedAnswer(answerId);
    }

    // answer 전체 조회
    public Page<Answer> findAnswers(int page, int size) {
        return answerRepository.findAll(PageRequest.of(page, size,
                Sort.by("orderId").descending()));
    }

    // answer 삭제
    public void deleteAnswer(int memberId, Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        verifyWriter(memberId, answer.getMember().getMemberId());

        answerRepository.delete(findAnswer);
    }

    public Answer findVerifiedAnswer(int answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);

        return optionalAnswer.orElseThrow(() -> {
            return new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
        });
    }

    // 해당 answer 를 쓴 사람과 요청으로 들어오는 member(수정하려는 사람)가 일치하는지 알아보는 로직
    public void verifyWriter(Integer postMemberId, Integer editMemberId) {
        if (!postMemberId.equals(editMemberId)) {
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_MEMBER);
        }
    }
}
