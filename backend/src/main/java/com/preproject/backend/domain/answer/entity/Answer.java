package com.preproject.backend.domain.answer.entity;

import com.preproject.backend.domain.audit.Auditable;
import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.question.entity.Question;
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
    // answer 식별자
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int answerId;

    // answer 내용
    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    // answer 내 투표 수
//    @Column(nullable = false)
//    private String score;

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

    // answerService 의 createAnswer 에서 검증된 memberId/questionId 를 가진 객체를 만들어 저장하기 위한 메서드
    public static Answer toEntity(String content, Question question, Member member) {
        Answer answer = Answer.builder()
                .content(content)
                .question(question)
                .member(member)
                .build();

        question.getAnswers().add(answer);

        return answer;
    }
}
