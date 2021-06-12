import { Item } from "../../domain/Model/item";
import { Tag } from "../../domain/Model/tag";
import { ItemDTO } from "../dto/itemDTO";
import { TagDTO } from "../dto/tagDTO";
import { Converter } from "./converter";
import { TagConverter } from "./tagConverter";

export class itemConverter implements Converter<ItemDTO, Item>{

  private tagConverter = new TagConverter();

  toModel(dto: ItemDTO): Item {    

     let tags : Tag[] = [];
     
     dto.tags.forEach(tag => {
      tags.push(this.tagConverter.toModel(tag));
     });

    let item = new Item(
      dto.id,
      dto.title,
      dto.description,
      dto.price,
      tags,
      dto.images,
      dto.active
    );
    return item;

  }
  toDTO(model: Item): ItemDTO {

    let tags : TagDTO[] = [];
     
    model.getTags().forEach(tag => {
      tags.push(this.tagConverter.toDTO(tag));
     });

    let item = new ItemDTO(
      model.getId(),
      model.getTitle(),
      model.getDescription(),
      model.getPrice(),
      tags,
      model.getImages(),
      model.isActive()
    );
    return item;
  }   
}