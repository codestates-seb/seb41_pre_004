package com.preproject.backend.domain.answer.service;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.answer.repository.AnswerRepository;
import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.comment.repository.CommentRepository;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    //private final PasswordEncoder passwordEncoder; // security

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    // TODO answer 등록
    public Answer createAnswer(Answer answer) {
        return null;
    }

    // TODO answer 수정
    public Answer updateAnswer(Answer answer) {
        return null;
    }

    // TODO answer 조회
    public Answer findAnswer(int answer_id) {
        return null;
    }

    // TODO answer 전체 조회
    public Page<Answer> findAnswers(int page, int size) {
        return null;
    }

    // TODO answer 삭제
    public void deleteAnswer(int answer_id) {

    }

    // TODO member_id로 검색해 자기가 쓴 answer 조회하고 없으면 exception 남기는 메서드 추가
}
