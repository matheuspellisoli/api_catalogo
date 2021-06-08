import {Tag} from "../Model/tag" 

export interface TagRepository{
    findAll(): Promise<Tag[]>;
    findById(id: number): Promise<Tag>;
    create(item: Tag): Promise<Tag>;
    update(item: Tag): Promise<Tag>;
    delete(id: number): Promise<boolean>;
}