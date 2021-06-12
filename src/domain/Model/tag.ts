import {TagType} from "./tagType"
export class Tag {
  private id: string;
  private value: string;
  private type: TagType;
  private active: Boolean;

  constructor(id: string, value: string, type: TagType, active: Boolean){
    this.id = id;
    this.value = value;
    this.type = type;
    this.active = active;
  }

  getId(): string {
    return this.id;
  }

  getvalue(): string {
    return this.value;
  }

  getType(): TagType {
    return this.type;
  }

  isActive(): Boolean {
    return this.active;
  }
}
