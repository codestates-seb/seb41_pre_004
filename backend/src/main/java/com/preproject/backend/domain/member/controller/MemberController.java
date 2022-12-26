package com.preproject.backend.domain.member.controller;

import com.preproject.backend.domain.member.dto.MemberDto;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.member.mapper.MemberMapper;
import com.preproject.backend.domain.member.service.MemberService;
import com.preproject.backend.global.dto.MultiResponseDto;
import com.preproject.backend.global.dto.SingleResponseDto;
import com.preproject.backend.global.utils.UriCreator;
import lombok.extern.slf4j.Slf4j;

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
@Slf4j
public class MemberController {
    private final static String MEMBER_DEFAULT_URL = "/members";
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

        Member createdMember = memberService.createMember(member);
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, createdMember.getMemberId());

        return ResponseEntity.created(location).build();
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(mapper.memberToMemberResponse(createMember)), HttpStatus.CREATED);
    }

    // member 수정
    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(
            @PathVariable("member-id") @Positive long memberId,
            @Valid @RequestBody MemberDto.Patch requestBody) {

        requestBody.setMemberId(memberId);
        Member updateMember = memberService.updateMember(mapper.memberPatchToMember(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(updateMember)), HttpStatus.OK);
    }

    // member 조회
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(
            @PathVariable("member-id") @Positive long memberId) {
        Member member = memberService.findMember(memberId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member)), HttpStatus.OK);
    }

    // TODO member 전체 조회 - pagenation 추가
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
    public ResponseEntity deleteMember(
            @PathVariable("member-id") @Positive long memberId) {

        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
