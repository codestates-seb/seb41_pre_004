package com.preproject.backend.domain.member.service;

import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.member.repository.MemberRepository;
import com.preproject.backend.global.auth.utils.CustomAuthorityUtils;
import com.preproject.backend.global.auth.utils.GetAuthUserUtils;
import com.preproject.backend.global.exception.BusinessLogicException;
import com.preproject.backend.global.exception.ExceptionCode;
import com.preproject.backend.global.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;
    private final CustomBeanUtils<Member> beanUtils;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    // member 등록 (회원가입)
    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());

        //Password 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        //DB에 User Role 저장
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        return memberRepository.save(member);
    }

    // member 수정
    //@Transactional(propagation = Propagation.REQUIRED, isolation = Isolation.SERIALIZABLE)
    public Member updateMember(Member member) {
        verifyExistsEmail2(member.getEmail()); // 먼저 해당 멤버의 이메일이 존재하는지 확인

        Member findMember = findVerifiedMember(member.getMemberId()); // 존재한다면 해당 아이디의 멤버 가져와서

        if(getLoginMember().getMemberId() != member.getMemberId()) // 로그인 유저 != 작성자 이면
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_MEMBER);

        beanUtils.copyNonNullProperties(member, findMember); // 수정

        return memberRepository.save(findMember);
    }

    // member 조회
    @Transactional(readOnly = true)
    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    // member 전체 조회
    public Page<Member> findMembers(int page, int size) {
        return memberRepository.findAll(
                PageRequest.of(page, size, Sort.by("memberId").descending())
        );
    }

    // member 삭제
    public void deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);

        if(getLoginMember().getMemberId() != findMember.getMemberId()) // 로그인 유저 != 작성자 이면
            throw new BusinessLogicException(ExceptionCode.UNAUTHORIZED_MEMBER);

        memberRepository.delete(findMember);
    }

    // member id로 검색
    //@Transactional(readOnly = true)
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);

        return optionalMember.orElseThrow(() -> {
                    throw  new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
                });
    }

    // member email 이 존재하는지 검증 1 --> 등록 시, email 같은 이메일이 존재한다면 exception 반환
    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);

        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    // member email 이 존재하는지 검증 --> 수정 시, 같은 email 이여야지만 수정이 가능하도록 ( 해당 email 이 없다면 exception 반환 )
    private void verifyExistsEmail2(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isEmpty())
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
    }

    // Login 한 Member 를 가져오는 로직
    public Member getLoginMember() {
        return  memberRepository.findByEmail(GetAuthUserUtils.getAuthUser().getName())
                .orElseThrow(()
                        -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    }
}
