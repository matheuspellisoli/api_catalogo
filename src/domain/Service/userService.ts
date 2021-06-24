import { User } from "../Model/user";
import { UserRepository } from "../repository/userRepository";

export class UserService {
  repository : UserRepository;

  constructor(repository : UserRepository){
    this.repository = repository;
  }

  findAll =  (): User[] => {
    return this.repository.findAll();
  };

  findById =  (id: string): User => {
    return this.repository.findById(id);
  };

  create =  (user: User): User => {
    return this.repository.create(user);
  };

  update =  (user: User): User => {
    if(user.getId() == null)
      return null;

    return this.repository.update(user)
  };

  findByEmail(mail: string): User {
    return this.repository.findByEmail(mail);
  }

  delete =  (id: string): Boolean => {
    return this.repository.delete(id)
  };
}