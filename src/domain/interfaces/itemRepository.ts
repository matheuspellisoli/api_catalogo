import {Item} from "../Model/item" 

export interface ItemRepository{
    findAll(): Item[];
    findById(id: number): Item;
    create(item: Item): Item;
    update(item: Item): Item;
    delete(id: number): Boolean;
}