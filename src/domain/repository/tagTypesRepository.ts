import {TagType} from "../Model/tagType" 

export interface TagTypesRepository{
    findAll(): TagType[];
    findById(id: string):  TagType;
    create(item: TagType): TagType;
    update(item: TagType): TagType;
    delete(id: string): Boolean;
}