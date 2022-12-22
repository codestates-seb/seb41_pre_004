package com.preproject.backend.domain.answer.entity;

import com.preproject.backend.domain.audit.Auditable;
import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Answer extends Auditable {
    // answer 식별자
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int answer_id;

    // answer 내용
    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    // answer 내 투표 수
    @Column(nullable = false)
    private String score;

    // 연관관계 매핑 - 한 member 가 여러개의 answer
    @ManyToOne
    @JoinColumn(name = "MemberID")
    private Member member;

    // 연관관계 매핑 - 한 question 에 여러개의 answer
    @ManyToOne
    @JoinColumn(name = "QuestionID")
    private Question question;

    // 연관관계 매핑 - 한 answer 에 여러개의 comment
    @OneToMany(mappedBy = "answer", cascade = CascadeType.ALL)
    private List<Comment> coments = new ArrayList<>();
}
