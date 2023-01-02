package com.preproject.backend.domain.question.entity;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.audit.Auditable;
import com.preproject.backend.domain.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "question")
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(length = 100, nullable = false)
    private String title;

    @Lob  // "Large OBject"를 데이터베이스에 적절하게 저장하기 위한 애노테이션
    private String content;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now();
    @Column(nullable = false)
    private int score; // 점수

    @Column(nullable = false)
    private int viewCount;  // 조회수


    @ManyToOne(targetEntity = Member.class, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private Set<Answer> answers = new HashSet<>();
    @OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REMOVE})
    private Set<QuestionTag> questionTags = new HashSet<>();

    public void voteUp(int num) {
        this.score += num;
    }
    public void voteDown(int num) {
        this.score -= num;
    }
}
