package com.preproject.backend.domain.vote.repository;

import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.question.entity.Question;
import com.preproject.backend.domain.vote.entity.VoteQuestion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VoteQuestionRepository extends JpaRepository<VoteQuestion, Long> {
//    Optional<VoteQuestion> findByQuestionMember(Question question, Member member);
}
