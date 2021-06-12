import {TagTypeDTO} from "./tagTypeDTO";

export class TagDTO {
    id: number;
    value: string;
    type: TagTypeDTO;
    active: Boolean;  
  
    constructor(id: number, value: string, type: TagTypeDTO, active: Boolean){
      this.id = id;
      this.value = value;
      this.type = type;
      this.active = active;
    }
  }
  