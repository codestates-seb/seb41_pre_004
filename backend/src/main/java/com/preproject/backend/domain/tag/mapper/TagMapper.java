package com.preproject.backend.domain.tag.mapper;

import com.preproject.backend.domain.tag.dto.TagDto;
import com.preproject.backend.domain.tag.entity.TagEntity;
import com.preproject.backend.global.page.PageInfo;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface TagMapper {
//    default TagDto.Response tagToResponse(PageInfo pageInfo, List<TagEntity> tags){
//        TagDto.Response response = new TagDto.Response();
//
//        response.setPageInfo(pageInfo);
//        List<TagDto.Information> listInfo = tags.stream().map(
//                t -> {
//                    TagDto.Information information = new TagDto.Information();
//                    information.setName(t.getName());
//                    information.setCount(t.getCount());
//                    return information;
//                }
//        ).collect(Collectors.toList());
//        response.setTags(listInfo);
//
//        return response;
//    }
    List<TagDto.Response> tagToResponse(List<TagEntity> tags);
}
