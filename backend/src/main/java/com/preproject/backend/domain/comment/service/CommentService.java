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

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final MemberService memberService;
    private final AnswerService answerService;
    private final CustomBeanUtils<Comment> beanUtils;

    // comment 등록
    public Comment createComment(Comment comment) {
        Answer answer = answerService.findVerifiedAnswer(comment.getAnswer().getAnswerId());

        comment.setMember(memberService.getLoginMember());
        comment.setAnswer(answer);

        return commentRepository.save(comment);
    }

    // comment 수정
    public Comment updateComment(Comment comment) {
        Comment findComment = findVerifiedComment(comment.getCommentId());

        Member postMember = memberService.findVerifiedMember(findComment.getMember().getMemberId());

        if (memberService.getLoginMember().getMemberId() != postMember.getMemberId()) {
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_MEMBER);
        }

        beanUtils.copyNonNullProperties(comment, findComment);

        return commentRepository.save(findComment);
    }

    // comment 조회
    public Comment findComment(long commentId) {
        return findVerifiedComment(commentId);
    }

    // comment 전체 조회
    public Page<Comment> findComments(int page, int size) {
        return commentRepository.findAll(PageRequest.of(page, size,
                Sort.by("commentId").descending()));
    }

    // comment 삭제
    public void deleteComment(long commentId) {
        Comment findComment = findVerifiedComment(commentId);

        Member postMember = memberService.findVerifiedMember(findComment.getMember().getMemberId()); // 작성자

        if(memberService.getLoginMember().getMemberId() != postMember.getMemberId()) // 로그인 유저 != 작성자 이면
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_MEMBER);

        commentRepository.delete(findComment);
    }

    // commentId 로 검색해 해당 comment 를 가져오기
    public Comment findVerifiedComment(long commentId) {
        Optional<Comment> optionalComment =
                commentRepository.findById(commentId);

        return optionalComment.orElseThrow(() -> {
                    return new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND);
        });
    }
}
