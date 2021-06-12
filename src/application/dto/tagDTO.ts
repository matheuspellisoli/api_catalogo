import {TagTypeDTO} from "./tagTypeDTO";

export class TagDTO {
    id: string;
    value: string;
    type: TagTypeDTO;
    active: Boolean;  
  
    constructor(id: string, value: string, type: TagTypeDTO, active: Boolean){
      this.id = id;
      this.value = value;
      this.type = type;
      this.active = active;
    }
  }
  