import {TagDTO} from "./tagDTO";

export class ItemDTO{
    id: string;
    title: string;
    description: string;
    price: number;
    tags: TagDTO[];
    images: string[];
    active: Boolean;
  
    constructor(id: string,title: string, description: string, price: number, tags: TagDTO[], images: string[], active: Boolean){
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.tags = tags;
      this.images = images;
      this.active = active;
    }
  
  }