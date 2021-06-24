import {TagDTO} from "./tagDTO";

export class LoginDTO{
  mail: string;
  password: string;

  constructor(mail: string, password: string){
    this.mail = mail;
    this.password = password;
  }  
}