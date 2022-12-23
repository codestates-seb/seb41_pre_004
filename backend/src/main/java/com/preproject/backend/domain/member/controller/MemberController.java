package com.preproject.backend.domain.member.controller;

import com.preproject.backend.domain.member.dto.MemberDto;
import com.preproject.backend.domain.member.entity.Member;
import com.preproject.backend.domain.member.mapper.MemberMapper;
import com.preproject.backend.domain.member.service.MemberService;
import com.preproject.backend.global.security.auth.jwt.JwtTokenizer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/Members")
@RequiredArgsConstructor
@Validated
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;
    private final JwtTokenizer jwtTokenizer;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public MemberDto.Response postMember(@Valid @RequestBody MemberDto.Post requestDto){
        Member member = mapper.postDtoToEntity(requestDto);
        Member createdMember = memberService.saveMember(member);
        return mapper.EntityToResponseDto(createdMember);
    }

    @GetMapping("/{member-id}")
    @ResponseStatus(HttpStatus.OK)
    public MemberDto.Response getMember(
            @PathVariable("member-id") @Positive Long memberId){
        Member member = memberService.findVerifiedMember(memberId);
        return mapper.EntityToResponseDto(member);
    }

    @GetMapping("/profile")
    @ResponseStatus(HttpStatus.OK)
    public MemberDto.Response getProfile(@RequestHeader(name = "Authorization") String token) {
        return mapper.EntityToResponseDto(memberService.findVerifiedMember(jwtTokenizer.getMemberId(token)));
    }
}