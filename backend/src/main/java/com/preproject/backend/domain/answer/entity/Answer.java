package com.preproject.backend.domain.answer.entity;

import com.preproject.backend.domain.audit.Auditable;
import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.question.entity.Question;
import com.preproject.backend.domain.vote.entity.VoteAnswer;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Answer extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @Column(nullable = false)
    private String content;

    // 연관관계 매핑 - 한 member 가 여러개의 answer
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    // 연관관계 매핑 - 한 question 에 여러개의 answer
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    // 연관관계 매핑 - 한 answer 에 여러개의 comment
    @OneToMany(mappedBy = "answer", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "answer", cascade = CascadeType.ALL)
    private List<VoteAnswer> voteAnswers;
}
