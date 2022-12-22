package com.preproject.backend.domain.answer.repository;

import com.preproject.backend.domain.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Integer> {
}
