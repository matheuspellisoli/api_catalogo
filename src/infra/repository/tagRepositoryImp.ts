import {TagRepository} from "../../domain/interfaces/tagRepository" 
import { Tag } from "../../domain/Model/tag";
import { TagType } from "../../domain/Model/tagType";

export class TagRepositoryImp implements TagRepository {

      items: Tag[] = [
        new Tag(1, "Azul", new TagType(1, "Cor", true, false, "", true),true),
        new Tag(2, "G", new TagType(2, "Tamanho", true, true, "P,M,G,GG", true),true)
    ]; 

    
       
    findAll(): Tag[] {
        return this.items;
    }
    findById(id: number): Tag {
        return this.items.filter(i => i.getId() == id)[0];
    }
    create(item: Tag): Tag {
        this.items.push(item);
        return item
    }
    update(item: Tag): Tag {
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