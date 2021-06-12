export class TagType {
  private id: number;
  private description: string;
  private visible: Boolean;
  private list?: Boolean;
  private listvalues?: string;
  private active: Boolean;

  constructor(id: number, description: string, visible: Boolean, list: Boolean, listvalues: string, active: Boolean){
    this.id = id;
    this.description = description;
    this.visible = visible;
    this.list = list == null? false : list;
    this.listvalues = listvalues == null? "" : listvalues;
    this.active = active;
  }

  getId(): number {
    return this.id;
  }

  getDescription(): string {
    return this.description;
  }

  isVisible(): Boolean {
    return this.visible;
  }

  isList(): Boolean {
    return this.list;
  }

  getListvalues(): string {
    return this.listvalues;
  }

  isActive(): Boolean {
    return this.active;
  }
}
