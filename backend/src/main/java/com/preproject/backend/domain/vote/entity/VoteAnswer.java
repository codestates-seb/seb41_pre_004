package com.preproject.backend.domain.vote.entity;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class VoteAnswer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerVoteId;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    private int count;
}
