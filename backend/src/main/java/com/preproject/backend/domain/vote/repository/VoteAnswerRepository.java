package com.preproject.backend.domain.vote.repository;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.vote.entity.VoteAnswer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VoteAnswerRepository extends JpaRepository<VoteAnswer, Long> {
    Optional<VoteAnswer> findByAnswerMember(Answer answer, Member member);
}
