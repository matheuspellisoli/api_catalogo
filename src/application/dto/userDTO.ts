export class UserDTO{
  id: string;
  name: string;
  mail: string;
  password: string;
  address: string;
  active: Boolean;
  rules : string[];

  constructor(id: string, name: string, mail: string, password: string, address: string, active: Boolean, rules: string[]){
    this.id = id;
    this.name = name;
    this.mail = mail;
    this.password = password;
    this.address = address;
    this.active = active;
    this.rules = rules;
  }  
}