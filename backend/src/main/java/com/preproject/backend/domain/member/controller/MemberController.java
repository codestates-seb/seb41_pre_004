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

    // member 등록 (회원가입)
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        Member member = mapper.memberPostToMember(requestBody);
        Member createMember = memberService.createMember(member);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(createMember)), HttpStatus.CREATED);
    }

    // member 수정
    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(
            @PathVariable("member-id") @Positive int member_id,
            @Valid @RequestBody MemberDto.Patch requestBody) {
        Member member = mapper.memberPatchToMember(requestBody);
        Member updateMember = memberService.updateMember(member);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(updateMember)), HttpStatus.OK);
    }

    // member 조회
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(
            @PathVariable("member-id") @Positive int member_id) {
        Member member = memberService.findMember(member_id);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member)), HttpStatus.OK);
    }

    // TODO member 전체 조회 - pagenation 추가
    @GetMapping
    public ResponseEntity getMembers() {
        List<Member> members = memberService.findMembers();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.membersToMemberResponses(members)), HttpStatus.OK);
    }

    // member 삭제
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(
            @PathVariable("member-id") @Positive int member_id) {
        memberService.deleteMember(member_id);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
