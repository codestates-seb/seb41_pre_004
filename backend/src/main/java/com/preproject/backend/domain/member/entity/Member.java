package com.preproject.backend.domain.member.entity;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.audit.Auditable;
import com.preproject.backend.domain.comment.entity.Comment;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long memberId;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    // member 비밀번호
    @Column(length = 100, nullable = false)
    private String password;

    // 연관관계 매핑 - 한 member 가 여러개의 comment
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    // 연관관계 매핑 - 한 member 가 여러개의 answer
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Answer> answers = new ArrayList<>();
    @Column(length = 100, nullable = false)
    private String name;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    public Member(String email) {
        this.email = email;
    }

    public Member(String email, String name) {
        this.email = email;
        this.name = name;
    }
}
