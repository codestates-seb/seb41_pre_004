package com.preproject.backend.domain.vote.entity;

import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.question.entity.Question;
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
public class VoteQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionVoteId;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    private int count;

    public void questionCountPlus(){
        this.count++;
    }
    public void questionCountMinus(){
        this.count--;
    }
    public void questionCountPlus(int num){
        this.count += num;
    }
    public void questionCountMinus(int num){
        this.count -= num;
    }
}
