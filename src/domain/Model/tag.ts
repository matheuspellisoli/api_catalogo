import {TagType} from "./tagType"
export class Tag {
  id: number;
  description: string;
  type: TagType;
  active: Boolean;


  constructor(id: number, description: string, type: TagType, active: Boolean){
    this.id = id;
    this.description = description;
    this.type = type;
    this.active = active;
  }
}
