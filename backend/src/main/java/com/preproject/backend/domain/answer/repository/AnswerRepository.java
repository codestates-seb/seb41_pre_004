package com.preproject.backend.domain.answer.repository;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerRepository extends JpaRepository<Answer, Integer> {
    Optional<Answer> findByEmail(String email);
}
