import { User } from "../../domain/Model/user";
import { UserDTO } from "../dto/userDTO";
import { Converter} from "./converter";


export class UserConverter implements Converter<UserDTO, User>{
    toModel(dto: UserDTO): User {
       return new User(dto.id,dto.name,dto.mail,dto.password,dto.address,dto.active,dto.rules);
    }

    toDTO(model: User): UserDTO {
        return new UserDTO(model.getId(),
        model.getName(),
        model.getMail(),
        model.getPassword(),
        model.getAddress(),
        model.isActive(),
        model.getRules());
    }
}