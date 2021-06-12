import { TagType } from "../../domain/Model/tagType";
import { TagTypeDTO } from "../dto/tagTypeDTO";
import { Converter } from "./converter";

export class TagTypeConverter implements Converter<TagTypeDTO, TagType>{
    toModel(dto: TagTypeDTO): TagType {
       
        let tagType = new TagType(
            dto.id,
            dto.description,
            dto.visible,
            dto.list,
            dto.listvalues,
            dto.active
        );

        return tagType;
    }
    toDTO(model: TagType): TagTypeDTO {
        let tagType = new TagTypeDTO(
            model.getId(),
            model.getDescription(),
            model.isVisible(),
            model.isList(),
            model.getListvalues(),
            model.isActive()
        );

        return tagType;
    }   
}