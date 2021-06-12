import { Tag } from "../../domain/Model/tag";
import { TagDTO } from "../dto/tagDTO";
import { Converter} from "./converter";
import { TagTypeConverter } from "./tagTypeConverter";


export class TagConverter implements Converter<TagDTO, Tag>{

    private tagTypeConvert = new TagTypeConverter();
    
    toModel(dto: TagDTO): Tag {
        let tag = new Tag(
            dto.id,
            dto.value,
            this.tagTypeConvert.toModel(dto.type),
            dto.active
        );
        return tag;
    }
    toDTO(model: Tag): TagDTO {
        let tag = new TagDTO(
            model.getId(),
            model.getvalue(),
            this.tagTypeConvert.toDTO(model.getType()),
            model.isActive()
        );
        return tag;
    }
    
  
}