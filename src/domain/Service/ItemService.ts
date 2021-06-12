import {Item} from "../Model/item";
import {ItemRepository} from "../interfaces/itemRepository";

export class ItemService {
  repository : ItemRepository;

  constructor(repository : ItemRepository){
    this.repository = repository;
  }

  findAll = (): Item[] => {
    return this.repository.findAll();
  };

  findById = (id: string): Item => {
    return this.repository.findById(id);
  };

  create = (item: Item): Item => {
    return this.repository.create(item);
  };

  update = (item: Item): Item => {
    if(item.getId() == null)
      return null;
    return this.repository.update(item)
  };

  delete = (id: string): Boolean => {
     return this.repository.delete(id)
  };
}