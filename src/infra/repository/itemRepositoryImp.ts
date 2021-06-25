import {ItemRepository} from "../../domain/repository/itemRepository" 
import { Item } from "../../domain/Model/item";
import { Tag } from "../../domain/Model/tag";
import { TagType } from "../../domain/Model/tagType";

export class ItemRepositoryImp implements ItemRepository {
    
    tags : Tag[] = [new Tag("a6123396-e45b-4f68-96aa-f4ce72e1d933", "Chaves", new TagType("cca10c75-6728-452f-8843-7a4425f3dfc1", "tipo", true, false, "", true),true),];

    imgs: string[] = ["https://img.lojadomecanico.com.br/IMAGENS/2/301/110860/Jogo-100-pecas-Chaves-de-Fenda-Phillips--fortgpro-fg81931.JPG"];
  
    items: Item[] = [
    new Item("18ec39f5-c2c8-4a95-9931-38482dcd48f7",
     "Jogo 100 Chaves",
      "O Jogo com 100 de Chaves de Fenda e Phillips FORTG PRO FG8193", 
      149.99, 
      this.tags, 
      this.imgs,
       true)
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

    search(value: string): Item[] {
        let itemsFilter = [] as Item[];        
    
        this.items.map(item => {

            if(item.getDescription().toLowerCase().includes(value.toLowerCase()))
                itemsFilter.push(item);
            else if (item.getTitle().toLowerCase().includes(value.toLowerCase()))
                itemsFilter.push(item);
            else if (item.getTags().filter(tag => tag.getvalue().toLowerCase().includes(value.toLowerCase())).length > 0)
                itemsFilter.push(item);
        });
        return itemsFilter;
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