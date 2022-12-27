package com.preproject.backend.domain.question.repository;

import com.preproject.backend.domain.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {
    Page<Question> findAll(Pageable pageable); // 전체 질문들

    // 특정 키워드를 입력해서 검색을 했을 때, 해당 키워드가 주제나 내용에 포함이 되어 있으면 그 목록들을 표시해준다.
    // "LIKE" 쿼리문을 활용해서 검색을 할 수 있게 된다.
//    @Query(value = "SELECT Q FROM QUESTION WHERE Q.TITLE LIKE %:keyword% OR Q.CONTEXT LIKE %:keyword%")
//    Page<Question> search(@Param("keyword") String keyword, Pageable pageable);

    // TODO 태그를 이용해서 질문들 검색
    // tagSearch

    // TODO 답변이 0개인 질문들 검색
    // noAnswerSearch

    // TODO 답변이 일정 갯수 이상인 질문들 검색
    // numberSearch

    // TODO 점수가 일정 점수 이상인 질문들 검색
    // scoreSearch
}