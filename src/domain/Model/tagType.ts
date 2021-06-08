export class TagType {
  id: number;
  description: string;
  visible: Boolean;

  constructor(id: number, description: string, visible: Boolean){
    this.id = id;
    this.description = description;
    this.visible = visible;
  }
}
