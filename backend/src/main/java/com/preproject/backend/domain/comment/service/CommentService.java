package com.preproject.backend.domain.comment.service;

import com.preproject.backend.domain.answer.entity.Answer;
import com.preproject.backend.domain.comment.entity.Comment;
import com.preproject.backend.domain.comment.repository.CommentRepository;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.global.exception.BusinessLogicException;
import com.preproject.backend.global.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    //private final PasswordEncoder passwordEncoder; // security

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    // comment 등록
    public Comment createComment(Comment comment) {
        verifyExistsEmail(comment.getMember().getEmail()); // comment 를 단 해당 member 의 email 을 가져와서 검증

        return commentRepository.save(comment);
    }

    // TODO comment 수정
    public Comment updateComment(Comment comment) {
        return null;
    }

    // TODO comment 조회
    public Comment findComment(int comment_id) {
        return null;
    }

    // TODO comment 전체 조회
    public List<Comment> findComments() {
        return commentRepository.findAll();
    }

    // TODO comment 삭제
    public void deleteComment(String email) { // TODO 이걸 email 로 하는 게 맞나 싶다 // 이거 다시
        Comment findComment = findVerifiedComment(email);

        commentRepository.delete(findComment);
    }

    // TODO member_id로 검색해 자기가 쓴 comment 조회하고 없으면 exception 남기는 메서드 추가
    public Comment findVerifiedComment(String email) {
        Optional<Comment> optionalComment =
                commentRepository.findByEmail(email);

        return optionalComment.orElseThrow(() -> {
                    return new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND);
        });
    }

    // email 이 존재하지 않으면 exception 을 남기는 로직
    // -> But, 결국은 어차피 위에서 이미 없으면 exception 반환하기 때문에 없어도 될 것 같기도 하고..
    // 근데 또 리턴 타입이 달라서 있어야 될 것 같기도 하고..
    private void verifyExistsEmail(String email) {
        Optional<Comment> comment = commentRepository.findByEmail(email);
        if (comment.isEmpty()) // 문자열의 길이가 0인 경우 // isBlank() - 문자열이 비어있거나, 빈 공백으로 이루어진 경우
            throw new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND);
    }
}
