import {Tag} from "../Model/tag" 

export interface TagRepository{
    findAll(): Tag[];
    findById(id: number): Tag;
    create(item: Tag): Tag;
    update(item: Tag): Tag;
    delete(id: number): Boolean;
}