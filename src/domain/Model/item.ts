import {Tag} from "./tag";

export class Item{
  private id: string;
  private title: string;
  private description: string;
  private price: number;
  private tags: Tag[];
  private images: string[];
  private active: Boolean;

  constructor(id: string,title: string, description: string, price: number, tags: Tag[], images: string[], active: Boolean){
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.tags = tags;
    this.images = images;
    this.active = active;
  }

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }

  getTags(): Tag[] {
    return this.tags;
  }

  getImages(): string[] {
    return this.images;
  }

  isActive(): Boolean {
    return this.active;
  }

}