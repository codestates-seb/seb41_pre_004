package com.preproject.backend.domain.member.service;

import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.member.repository.MemberRepository;
import com.preproject.backend.global.exception.BusinessLogicException;
import com.preproject.backend.global.exception.ExceptionCode;
import com.preproject.backend.global.utils.CustomBeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final CustomBeanUtils<Member> beanUtils;
    //private final PasswordEncoder passwordEncoder; // security

    public MemberService(MemberRepository memberRepository, CustomBeanUtils<Member> beanUtils) {
        this.memberRepository = memberRepository;
        this.beanUtils = beanUtils;
    }

    // TODO member 등록 (회원가입) / 보안 적용
    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());

//        String encryptedPassword = passwordEncoder.encode(member.getPassword());
//        member.setPassword(encryptedPassword);
//
//        List<String> roles = authorityUtils.createRoles(member.getEmail());
//        member.setRoles(roles);

        return memberRepository.save(member);
    }

    // TODO member 수정 // But, 현재 우리가 만드는 페이지에는 필요할까 생각이 듦
    public Member updateMember(Member member) {
        // TODO 해당 멤버 식별자에 저장된 이메일이 같을 경우에만 수정 가능하도록하기
        //verifyExistsEmail(member.getEmail()); // 먼저 해당 멤버의 이메일이 존재하는지 확인
        // TODO 근데 이건 이메일이 존재하면 에러 발생시키니까 존재하지 않으면 에러 발생시키는 로직 만들기
        Member findMember = findVerifiedMember(member.getMember_id()); // 존재한다면 해당 아이디의 멤버 가져와서

        beanUtils.copyNonNullProperties(member, findMember);

        return memberRepository.save(findMember);
    }

    // member 조회
    public Member findMember(int member_id) {
        return findVerifiedMember(member_id);
    }

    // member 전체 조회
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    // member 삭제
    public void deleteMember(int member_id) {
        Member findMember = findVerifiedMember(member_id);

        memberRepository.delete(findMember);
    }

    // member id로 검색
    public Member findVerifiedMember(int member_id) {
        Optional<Member> optionalMember =
                memberRepository.findById(member_id);

        return optionalMember.orElseThrow(() -> {
                    return new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
                });
    }

    // member email로 존재하는지 검증
    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);

        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
}
