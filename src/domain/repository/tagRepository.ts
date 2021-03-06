import {Tag} from "../Model/tag" 

export interface TagRepository{
    findAll(): Tag[];
    findById(id: string): Tag;
    create(item: Tag): Tag;
    update(item: Tag): Tag;
    delete(id: string): Boolean;
}