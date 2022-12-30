package com.preproject.backend.domain.answer.service;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.answer.repository.AnswerRepository;
import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.comment.service.CommentService;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.member.service.MemberService;
import com.preproject.backend.domain.question.entity.Question;
import com.preproject.backend.domain.question.service.QuestionService;
import com.preproject.backend.global.exception.BusinessLogicException;
import com.preproject.backend.global.exception.ExceptionCode;
import com.preproject.backend.global.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    private final QuestionService questionService;
    private final CustomBeanUtils<Answer> beanUtils;


    public Answer createAnswer(Answer answer) {
        Question question = questionService.existQuestion(answer.getQuestion().getQuestionId());

        answer.setMember(memberService.getLoginMember());
        answer.setQuestion(question);

        return answerRepository.save(answer);
    }

    // answer 수정
    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Member postMember = memberService.findVerifiedMember(findAnswer.getMember().getMemberId()); // 작성자

        if(memberService.getLoginMember().getMemberId() != postMember.getMemberId()) // 로그인 유저 != 작성자 이면
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_MEMBER);

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
    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);

        Member postMember = memberService.findVerifiedMember(findAnswer.getMember().getMemberId()); // 작성자

        if(memberService.getLoginMember().getMemberId() != postMember.getMemberId()) // 로그인 유저 != 작성자 이면
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_MEMBER);

        answerRepository.delete(findAnswer);
    }

    public Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer =
                answerRepository.findById(answerId);

        return optionalAnswer.orElseThrow(() -> {
            return new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND);
        });
    }
}
