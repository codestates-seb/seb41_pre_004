package com.preproject.backend.domain.tag.mapper;

import com.preproject.backend.domain.tag.dto.TagDto;
import com.preproject.backend.domain.tag.entity.TagEntity;
import com.preproject.backend.global.page.PageInfo;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface TagMapper {
    List<TagDto.Response> tagToResponse(List<TagEntity> tags);
}
