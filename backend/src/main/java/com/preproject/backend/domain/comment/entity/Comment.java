package com.preproject.backend.domain.comment.entity;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Comment {
    // comment 식별자
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int comment_id;

    // comment 내용
    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    // comment 내 투표 수
    @Column(nullable = false)
    private String score;

    // 연관관계 매핑 - 한 member 가 여러개의 comment
    @ManyToOne
    @JoinColumn(name = "MemberID")
    private Member member;

    // 연관관계 매핑 - 한 answer 에 여러개의 comment
    @ManyToOne
    @JoinColumn(name = "AnswerID")
    private Answer answer;
}
