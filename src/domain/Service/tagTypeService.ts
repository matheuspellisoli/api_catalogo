import {TagType} from "../Model/tagType";
import {TagTypesRepository} from "../interfaces/tagTypesRepository";

export class TagTypeService {

  repository : TagTypesRepository;

  constructor(repository : TagTypesRepository){
    this.repository = repository;
  }

  findAll =  (): TagType[] => {
    return this.repository.findAll();
  };

  findById =  (id: string): TagType => {
    return this.repository.findById(id);
  };

  create =  (tagType: TagType): TagType => {
    return this.repository.create(tagType);
  };

  update =  (tagType: TagType): TagType => {

    if(tagType.getId() == null)
      return null;

    return this.repository.update(tagType)
  };

  delete =  (id: string): Boolean => {
    return this.repository.delete(id)
  };
}