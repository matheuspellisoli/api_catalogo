import {ItemRepository} from "../../domain/interfaces/itemRepository" 
import { Item } from "../../domain/Model/item";
import { Tag } from "../../domain/Model/tag";
import { TagType } from "../../domain/Model/tagType";

export class ItemRepositoryImp implements ItemRepository {

    tags : Tag[] = [new Tag("a6123396-e45b-4f68-96aa-f4ce72e1d933", "Azul", new TagType("cca10c75-6728-452f-8843-7a4425f3dfc1", "Cor", true, false, "", true),true),
        new Tag("76805e39-f653-4f7b-9fa5-0ff795cac5fe", "G", new TagType("bf97d25a-36b9-40d7-83f1-809469de3ce4", "Tamanho", true, true, "P,M,G,GG", true),true)];

    imgs: string[] = ["https://cdn.auth0.com/blog/whatabyte/burger-sm.png"];
  
    items: Item[] = [
    new Item("18ec39f5-c2c8-4a95-9931-38482dcd48f7", "casaco", "um belo casaco", 149.99, this.tags, this.imgs, true)
    ];


    
    
    findAll(): Item[] {
        return this.items;
    }
    findById(id: string): Item {
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
    delete(id: string): Boolean {
        const item = this.findById(id);
        if (!item) {
            return false;
        }       
         
        delete this.items[this.items.findIndex(item => item.getId() == id)];

        return true;
    }
     
}