export class TagTypeDTO {
    id: number;
    description: string;
    visible: Boolean;
    list?: Boolean;
    listvalues?: string;
    active: Boolean;
  
    constructor(id: number, description: string, visible: Boolean, list: Boolean, listvalues: string, active: Boolean){
      this.id = id;
      this.description = description;
      this.visible = visible;
      this.list = list == null? false : list;
      this.listvalues = listvalues == null? "" : listvalues;
      this.active = active;
    }
  }
  