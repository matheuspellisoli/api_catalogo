import {Item} from "../Model/item" 

export interface ItemRepository{
    findAll(): Item[];
    findById(id: string): Item;
    create(item: Item): Item;
    update(item: Item): Item;
    delete(id: string): Boolean;
}