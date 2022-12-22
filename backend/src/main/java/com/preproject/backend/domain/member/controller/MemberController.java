package com.preproject.backend.domain.member.controller;

import com.preproject.backend.domain.member.dto.MemberDto;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.member.mapper.MemberMapper;
import com.preproject.backend.domain.member.service.MemberService;
import com.preproject.backend.global.dto.MultiResponseDto;
import com.preproject.backend.global.dto.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/members")
@Validated
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    // TODO member 등록 (회원가입)
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        return null;
    }

    // TODO member 수정 // But, 현재 우리가 만드는 페이지에는 필요할까 생각이 듦
    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(
            @PathVariable("member-id") @Positive int member_id,
            @Valid @RequestBody MemberDto.Patch requestBody) {
        Member member = mapper.memberPatchToMember(requestBody);
        Member updateMember = memberService.updateMember(member);
        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponse(updateMember)), HttpStatus.OK);
    }

    // TODO member 조회
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(
            @PathVariable("member-id") @Positive int member_id) {
        return null;
    }

    // TODO member 전체 조회
    @GetMapping
    public ResponseEntity getMembers() {
        List<Member> members = memberService.findMembers();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.membersToMemberResponses(members)), HttpStatus.OK);
    }

    // TODO member 삭제
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(
            @PathVariable("member-id") @Positive int member_id) {
        return null;
    }
}
