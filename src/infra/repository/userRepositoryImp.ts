import {ItemRepository} from "../../domain/repository/itemRepository" 
import { Item } from "../../domain/Model/item";
import { Tag } from "../../domain/Model/tag";
import { TagType } from "../../domain/Model/tagType";
import { UserRepository } from "../../domain/repository/userRepository";
import { User } from "../../domain/Model/user";

export class UserRepositoryImp implements UserRepository {    
    users = [new User("a5fad476-a451-4c64-9331-ef50117fb9bb", "fulano de tal", "fulano@gmail.com", "a", "Alameda Tucumã, Brasil Novo - Macapá  AP | 68909-335", true, null),
                new User("ea50b0ab-084e-4bcc-ba61-8e735d395bc4", "fulano de tal 2", "fulano2@gmail.com", "a", "Alameda Tucumã, Brasil Novo - Macapá  AP | 68909-335", true, null)];

    findAll(): User[] {
        return this.users;
    }
    findById(id: string): User {
        return this.users.filter(u => u.getId() == id)[0];
    }
    findByEmail(mail: string): User {
        return this.users.filter(u => u.getMail() == mail)[0];
    }
    create(user: User): User {
        this.users.push(user);
        return user
    }
    update(user: User): User {
        return this.users[this.users.findIndex(u => u.getId() == user.getId())] = user;
        return user;
    }
    delete(id: string): Boolean {
        const item = this.findById(id);
        if (!item) {
            return false;
        }       
        delete this.users[this.users.findIndex(u => u.getId() == id)];
        return true;
    }  
}