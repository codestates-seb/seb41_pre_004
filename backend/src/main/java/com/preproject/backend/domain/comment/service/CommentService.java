package com.preproject.backend.domain.comment.service;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.answer.service.AnswerService;
import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.comment.repository.CommentRepository;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.member.service.MemberService;
import com.preproject.backend.global.exception.BusinessLogicException;
import com.preproject.backend.global.exception.ExceptionCode;
import com.preproject.backend.global.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final MemberService memberService;
    private final AnswerService answerService;
    private final CustomBeanUtils<Comment> beanUtils;
    //private final PasswordEncoder passwordEncoder; // security

    // comment 등록
    public Comment createComment(Comment postComment) {
        Member member = memberService.findVerifiedMember(postComment.getMember().getMemberId()); // 해당 memberId 를 가진 member 가 쓴 answer 중,
        Answer answer = answerService.findVerifiedAnswer(postComment.getAnswer().getAnswerId()); // 해당 answerId 를 가진 answer 에 comment 를 달기 위해
        // 위에서 가져온 애들을 가지고 member, answer 정보를 가진 객체를 하나 만들어서 저장
        Comment createComment = Comment.toEntity(postComment.getContent(), answer, member);

        return commentRepository.save(postComment);
    }

    // comment 수정
    public Comment updateComment(int memberId, Comment patchComment) { // patchComment == 수정될 내용
        Comment findComment = findVerifiedComment(patchComment.getCommentId());

        verifyWriter(memberId, patchComment.getMember().getMemberId());

        beanUtils.copyNonNullProperties(patchComment, findComment);

        return commentRepository.save(findComment);
    }

    // comment 조회
    public Comment findComment(int commentId) {
        return findVerifiedComment(commentId);
    }

    // comment 전체 조회
    public Page<Comment> findComments(int page, int size) {
        return commentRepository.findAll(PageRequest.of(page, size,
                Sort.by("orderId").descending()));
    }

    // comment 삭제
    public void deleteComment(Comment comment, int memberId) {
        Comment findComment = findVerifiedComment(comment.getCommentId());

        verifyWriter(memberId, comment.getMember().getMemberId());

        commentRepository.delete(findComment);
    }

    // commentId 로 검색해 해당 comment 를 가져오기
    public Comment findVerifiedComment(int commentId) {
        Optional<Comment> optionalComment =
                commentRepository.findById(commentId);

        return optionalComment.orElseThrow(() -> {
                    return new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND);
        });
    }

    // 해당 comment 를 쓴 사람과 요청으로 들어오는 member(수정하려는 사람)가 일치하는지 알아보는 로직
    public void verifyWriter(Integer postMemberId, Integer editMemberId) {
        if (!postMemberId.equals(editMemberId)) {
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_MEMBER);
        }
    }
}
