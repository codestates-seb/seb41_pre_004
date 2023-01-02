package com.preproject.backend.domain.tag.mapper;

import com.preproject.backend.domain.tag.dto.TagDto;
import com.preproject.backend.domain.tag.entity.TagEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TagMapper {
    List<TagDto.Response> tagToResponse(List<TagEntity> tags);
}
