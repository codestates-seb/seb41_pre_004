package com.preproject.backend.domain.question.service;

import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.member.repository.MemberRepository;
import com.preproject.backend.domain.member.service.MemberService;
import com.preproject.backend.domain.question.entity.Question;
import com.preproject.backend.domain.question.repository.QuestionRepository;
import com.preproject.backend.global.exception.BusinessLogicException;
import com.preproject.backend.global.exception.ExceptionCode;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@Slf4j
@AllArgsConstructor
public class QuestionService {
    // TODO 해당 글을 수정, 삭제할 때에는 그 사람이 제대로 접속하였는지, 다른 사람은 아니인지를 확인해야 한다.
    private QuestionRepository questionRepository;
    private MemberRepository memberRepository;
    private MemberService memberService;

    //CREATE
    public Question createQuestion(Question question) {
        long memberId = memberService.getLoginMember().getMemberId();
        Member member = getMemberFromId(memberId);

        question.setMember(member); // 해당 질문을 누가 올렸는지 연결
        return questionRepository.save(question);
    }

    // 맴버 id로 맴버 찾기
    private Member getMemberFromId(long memberId) {
        return memberRepository.findById(memberId).get();
    }

    //READ
    public Question readQuestion(long questionId) {
        Question question = existQuestion(questionId); // 해당 Id 값의 질문이 존재하는지 검증
        question.setViewCount(question.getViewCount() + 1); // 조회수 +1씩 올라간다. (default 0)
        return questionRepository.save(question);
    }

    public Page<Question> readQuestions(int page, int size) {
        return questionRepository.findAll(
                PageRequest.of(page, size, Sort.by("questionId").descending())
        );
    }

    public Question existQuestion(long questionId) {
        Optional<Question> question = questionRepository.findById(questionId);
        return question.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
    }

    //UPDATE - tag 미포함
    public Question updateQuestion(long questionId, Question changedQuestion) {
        Question question = verifyWriter(questionId); // 현재 사용자가 작성자가 맞는지
        // 해당 글 수정
        question.setTitle(changedQuestion.getTitle());
        question.setContent(changedQuestion.getContent());

        return questionRepository.save(question);
    }

    private Question verifyWriter(long questionId) {
        long memberId = memberService.getLoginMember().getMemberId();
        Question question = existQuestion(questionId); // 해당 질문이 존재하는지 확인
        if (question.getMember().getMemberId() != memberId) {
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_MEMBER);
        }
        return question;
    }

    //DELETE
    public void deleteQuestion(long questionId) {
        Question question = verifyWriter(questionId); //현재 사용자가 작성자가 맞는지
        Member member = question.getMember();
        memberRepository.save(member);
        questionRepository.delete(question);
    }
}