import {TagType} from "./tagType"
export class Tag {
  private id: number;
  private value: string;
  private type: TagType;
  private active: Boolean;

  constructor(id: number, value: string, type: TagType, active: Boolean){
    this.id = id;
    this.value = value;
    this.type = type;
    this.active = active;
  }

  getId(): number {
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
