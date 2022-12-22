package com.preproject.backend.domain.member.mapper;

import com.preproject.backend.domain.member.dto.AnswerDto;
import com.preproject.backend.domain.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;
@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostToMember(AnswerDto.Post requestBody);
    Member memberPatchToMember(AnswerDto.Patch requestBody);
    AnswerDto.Response memberToMemberResponse(Member member);
    List<AnswerDto.Response> membersToMemberResponses(List<Member> members);
}
