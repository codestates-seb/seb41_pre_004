package com.preproject.backend.domain.member.mapper;

import com.preproject.backend.domain.member.dto.MemberDto;
import com.preproject.backend.domain.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;
@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post requestBody);
    Member memberPatchToMember(MemberDto.Patch requestBody);
    MemberDto.Response memberToMemberResponse(Member member);
    List<MemberDto.Response> membersToMemberResponses(List<Member> members);
}
