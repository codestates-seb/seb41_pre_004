package com.preproject.backend.domain.member.controller;

import com.preproject.backend.domain.member.dto.MemberDto;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.member.mapper.MemberMapper;
import com.preproject.backend.domain.member.service.MemberService;
import com.preproject.backend.global.dto.MultiResponseDto;
import com.preproject.backend.global.dto.SingleResponseDto;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/members")
@Validated
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    // member 등록 (회원가입)
    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        Member member = mapper.memberPostToMember(requestBody);
        Member createMember = memberService.createMember(member);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(createMember)), HttpStatus.CREATED);
    }

    // member 수정
    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") @Positive long memberId,
                                      @Valid @RequestBody MemberDto.Patch requestBody) {

        requestBody.setMemberId(memberId);
        Member updateMember = memberService.updateMember(mapper.memberPatchToMember(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(updateMember)), HttpStatus.OK);
    }

    // member 조회
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {
        Member member = memberService.findMember(memberId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member)), HttpStatus.OK);
    }

    // member 전체 조회
    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size) {
        Page<Member> pageMembers = memberService.findMembers(page - 1, size);
        List<Member> members = pageMembers.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.membersToMemberResponses(members),pageMembers), HttpStatus.OK);
    }

    // member 삭제
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId) {

        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
