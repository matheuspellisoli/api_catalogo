import { User } from "../Model/user";

export interface UserRepository{
    findAll(): User[];
    findById(id: string): User;
    findByEmail(email: string): User;
    create(user: User): User;
    update(user: User): User;
    delete(id: string): Boolean;
}