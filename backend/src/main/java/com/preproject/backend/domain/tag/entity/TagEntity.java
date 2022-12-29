package com.preproject.backend.domain.tag.entity;

import com.preproject.backend.domain.audit.Auditable;
import com.preproject.backend.domain.question.entity.QuestionTag;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "TAG")
public class TagEntity extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagId;

    @Column(unique = true)
    private String name;

    // 해당 태그가 있는 질문의 갯수
    private Integer count = 1; // 처음 생성했을 때 1

    @OneToMany(mappedBy = "tag")
    private Set<QuestionTag> questionTagSet = new HashSet<>();

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
