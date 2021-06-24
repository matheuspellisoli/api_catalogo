export class User {
  private id: string;
  private name: string;
  private mail: string;
  private password: string;
  private address: string;
  private active: Boolean;
  private rules : string[];
  private token : string;

  constructor(id: string, name: string, mail: string, password: string, address: string, active: Boolean, rules: string[]){
    this.id = id;
    this.name = name;
    this.mail = mail;
    this.password = password;
    this.address = address;
    this.active = active;
    this.rules = rules;
  }

  getId(): string {
    return this.id;
  }

  getName(): string{
    return this.name;
  }
  
  getMail(): string{
    return this.mail;
  }
  
  getPassword(): string{
    return this.password;
  }

  getAddress(): string{
    return this.address;
  }

  getRules(): string[] {
    return this.rules;
  }

  isActive(): Boolean {
    return this.active;
  }


  getToken(): string{
    return this.token;
  }
  setToken(token : string){
    this.token = token;
  } 
}
