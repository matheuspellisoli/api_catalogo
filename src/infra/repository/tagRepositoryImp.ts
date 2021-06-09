import {TagRepository} from "../../domain/interfaces/tagRepository" 
import { Tag } from "../../domain/Model/tag";

export class TagRepositoryImp implements TagRepository {

      items: Tag[] = [
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
    ]; 
       
    findAll(): Tag[] {
        return this.items;
    }
    findById(id: number): Tag {
        return this.items.filter(i => i.id == id)[0];
    }
    create(item: Tag): Tag {
        item.id = this.items.length + 1;
        this.items.push(item);
        return item
    }
    update(item: Tag): Tag {
        this.items[this.items.findIndex(i => i.id == item.id)] = item;
        return item;
    }
    delete(id: number): Boolean {
        const item = this.findById(id);
        if (!item) {
            return false;
        }       
         
        delete this.items[this.items.findIndex(item => item.id == id)];

        return true;
    }
     
}