import {ItemRepository} from "../../domain/interfaces/itemRepository" 
import { Item } from "../../domain/Model/item";
import { Tag } from "../../domain/Model/tag";
import { TagType } from "../../domain/Model/tagType";

export class ItemRepositoryImp implements ItemRepository {

    tags : Tag[] = [new Tag(1, "Azul", new TagType(1, "Cor", true, false, "", true),true),
        new Tag(2, "G", new TagType(2, "Tamanho", true, true, "P,M,G,GG", true),true)];

    imgs: string[] = ["https://cdn.auth0.com/blog/whatabyte/burger-sm.png"];
    items: Item[] = [
    new Item(1, "casaco", "um belo casaco", 149.99, this.tags, this.imgs, true)
    ];


    
    
    findAll(): Item[] {
        return this.items;
    }
    findById(id: number): Item {
        return this.items.filter(i => i.getId() == id)[0];
    }
    create(item: Item): Item {
        this.items.push(item);
        return item
    }
    update(item: Item): Item {
        this.items[this.items.findIndex(i => i.getId() == item.getId())] = item;
        return item;
    }
    delete(id: number): Boolean {
        const item = this.findById(id);
        if (!item) {
            return false;
        }       
         
        delete this.items[this.items.findIndex(item => item.getId() == id)];

        return true;
    }
     
}