import {TagType} from "../Model/tagType" 

export interface TagTypesRepository{
    findAll(): Promise<TagType[]>;
    findById(id: number): Promise<TagType>;
    create(item: TagType): Promise<TagType>;
    update(item: TagType): Promise<TagType>;
    delete(id: number): Promise<boolean>;
}