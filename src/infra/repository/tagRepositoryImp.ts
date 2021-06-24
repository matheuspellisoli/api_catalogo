import {TagRepository} from "../../domain/repository/tagRepository" 
import { Tag } from "../../domain/Model/tag";
import { TagType } from "../../domain/Model/tagType";

export class TagRepositoryImp implements TagRepository {

      items: Tag[] = [new Tag("a6123396-e45b-4f68-96aa-f4ce72e1d933", "Azul", new TagType("cca10c75-6728-452f-8843-7a4425f3dfc1", "Cor", true, false, "", true),true),
      new Tag("76805e39-f653-4f7b-9fa5-0ff795cac5fe", "G", new TagType("bf97d25a-36b9-40d7-83f1-809469de3ce4", "Tamanho", true, true, "P,M,G,GG", true),true)];
       
    findAll(): Tag[] {
        return this.items;
    }
    findById(id: string): Tag {
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
    delete(id: string): Boolean {
        const item = this.findById(id);
        if (!item) {
            return false;
        }       
         
        delete this.items[this.items.findIndex(item => item.getId() == id)];

        return true;
    }
     
}