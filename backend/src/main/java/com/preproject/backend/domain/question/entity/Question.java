package com.preproject.backend.domain.question.entity;

import com.preproject.backend.domain.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "QUESTION")
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer questionId;

    private String title;

    @Lob  // "Large OBject"를 데이터베이스에 적절하게 저장하기 위한 애노테이션
    private String context;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now();

    //TODO 추가하면 좋을 것
    // 조회수, 댓글 갯수

}
