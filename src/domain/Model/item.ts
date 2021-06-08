import {Tag} from "./tag";

export class Item{
  id: number;
  title: String;
  description: String;
  price: number;
  tags: [Tag];
  images: [String];
  active: Boolean;

  constructor(id: number,title: String, description: String, price: number, tags: [Tag], images: [String], active: Boolean){
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.tags = tags;
    this.images = images;
    this.active = active;
  }

}