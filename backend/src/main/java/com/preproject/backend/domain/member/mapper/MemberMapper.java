package com.preproject.backend.domain.member.mapper;

import com.preproject.backend.domain.member.dto.MemberDto;
import com.preproject.backend.domain.member.entity.Member;
import org.mapstruct.Mapper;





@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member postDtoToEntity(MemberDto.Post postDto);
    MemberDto.Response EntityToResponseDto(Member member);
}

