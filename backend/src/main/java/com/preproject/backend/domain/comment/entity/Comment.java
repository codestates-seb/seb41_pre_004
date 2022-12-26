package com.preproject.backend.domain.comment.entity;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.member.entity.Member;
import lombok.*;

import javax.persistence.*;
import java.util.Optional;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Comment {
    // comment 식별자
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int commentId;

    // comment 내용
    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    // comment 내 투표 수
//    @Column(nullable = false)
//    private String score;

    // 연관관계 매핑 - 한 member 가 여러개의 comment
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    // 연관관계 매핑 - 한 answer 에 여러개의 comment
    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;

    // commentService 의 createComment 에서 검증된 memberId/answerId 를 가진 객체를 만들어 저장하기 위한 메서드
    public static Comment toEntity(String content, Answer answer, Member member) {
        Comment comment = Comment.builder()
                .content(content)
                .member(member)
                .answer(answer)
                .build();

        answer.getComments().add(comment);

        return comment;
    }
    // CommentService updateComment 에서 사용하려 했던 로직 - But, 지금 사용 X
//    public void patch(CommentDto.Patch patchRequest) { // patchRequest == 수정될 대댓글
//        if(patchRequest.getContent() != null)
//            this.content = patchRequest.getContent();
//    }
}
