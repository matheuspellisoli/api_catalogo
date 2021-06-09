import {TagType} from "../Model/tagType" 

export interface TagTypesRepository{
    findAll(): TagType[];
    findById(id: number):  TagType;
    create(item: TagType): TagType;
    update(item: TagType): TagType;
    delete(id: number): Boolean;
}