import {ItemRepository} from "../../domain/interfaces/itemRepository" 
import { Item } from "../../domain/Model/item";

export class ItemRepositoryImp implements ItemRepository {

      items: Item[] = [
        {
            id: 1,
            title: "item 1",
            description: "um belo item",
            price: 10.7,
            tags: [
                {
                    id: 1,
                    description: "Azul",
                    type: {
                        id: 1,
                        description: "cor",
                        visible: true
                    },
                    active: true
                }
            ],
            images: ["https://cdn.auth0.com/blog/whatabyte/burger-sm.png"],
            active: true
        }
    ];
    
    findAll(): Item[] {
        return this.items;
    }
    findById(id: number): Item {
        return this.items.filter(i => i.id == id)[0];
    }
    create(item: Item): Item {
        item.id = this.items.length + 1;
        this.items.push(item);
        return item
    }
    update(item: Item): Item {
        item =  this.items.filter((i) => i.id == item.id)[0];
        this.items[item.id] = item;
        return item;
    }
    delete(id: number): Boolean {
        const item = this.findById(id);
        if (!item) {
            return false;
        }        
        delete this.items[id];

        return true;
    }
     
}