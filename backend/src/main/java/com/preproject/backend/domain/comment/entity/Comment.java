package com.preproject.backend.domain.comment.entity;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.audit.Auditable;
import com.preproject.backend.domain.member.entity.Member;
import lombok.*;

import javax.persistence.*;
import java.util.Optional;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Comment extends Auditable {
    // comment 식별자
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long commentId;

    // comment 내용
    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;


    // 연관관계 매핑 - 한 member 가 여러개의 comment
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    // 연관관계 매핑 - 한 answer 에 여러개의 comment
    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;
}
