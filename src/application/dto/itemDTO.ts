import {TagDTO} from "./tagDTO";

export class ItemDTO{
    id: number;
    title: string;
    description: string;
    price: number;
    tags: TagDTO[];
    images: string[];
    active: Boolean;
  
    constructor(id: number,title: string, description: string, price: number, tags: TagDTO[], images: string[], active: Boolean){
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.tags = tags;
      this.images = images;
      this.active = active;
    }
  
  }