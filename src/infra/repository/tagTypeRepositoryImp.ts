import {TagTypesRepository} from "../../domain/interfaces/tagTypesRepository" 
import { TagType } from "../../domain/Model/tagType";

export class TagTypeRepositoryImp implements TagTypesRepository {

      items: TagType[] = [
        new TagType("cca10c75-6728-452f-8843-7a4425f3dfc1", "Cor", true, false, "", true),
        new TagType("bf97d25a-36b9-40d7-83f1-809469de3ce4", "Tamanho", true, true, "P,M,G,GG", true)
    ]; 
       
    
    findAll(): TagType[] {
        return this.items;
    }
    findById(id: string): TagType {
        return this.items.filter(i => i.getId() == id)[0];
    }
    create(item: TagType): TagType {
        this.items.push(item);
        return item
    }
    update(item: TagType): TagType {
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