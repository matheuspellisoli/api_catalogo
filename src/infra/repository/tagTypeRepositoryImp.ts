import {TagTypesRepository} from "../../domain/interfaces/tagTypesRepository" 
import { TagType } from "../../domain/Model/tagType";

export class TagTypeRepositoryImp implements TagTypesRepository {

      items: TagType[] = [
        {
            id: 1,
            description: "cor",
            visible: true
        }
    ]; 
       
    findAll(): TagType[] {
        return this.items;
    }
    findById(id: number): TagType {
        return this.items.filter(i => i.id == id)[0];
    }
    create(item: TagType): TagType {
        item.id = this.items.length + 1;
        this.items.push(item);
        return item
    }
    update(item: TagType): TagType {
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