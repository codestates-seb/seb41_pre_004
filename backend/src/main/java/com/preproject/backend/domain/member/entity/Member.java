package com.preproject.backend.domain.member.entity;

import com.preproject.backend.domain.audit.Auditable;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Member extends Auditable {
    // member 식별자
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int memberId;

    // member 이름
    @Column(length = 100, nullable = false)
    private String displayName;

    // member 이메일
    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    // member 비밀번호
    @NotBlank
    @Column(length = 100, nullable = false, unique = true)
    private String password;

//    // 연관관계 매핑 - 한 member 가 여러개의 comment
//    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
//    private List<Comment> comments = new ArrayList<>();
//
//    // 연관관계 매핑 - 한 member 가 여러개의 answer
//    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
//    private List<Answer> answers = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
}
