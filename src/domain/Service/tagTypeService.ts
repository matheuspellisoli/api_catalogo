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

  findById =  (id: number): TagType => {
    return this.repository.findById(id);
  };

  create =  (tagType: TagType): TagType => {
    return this.repository.create(tagType);
  };

  update =  (tagType: TagType): TagType => {

    if(tagType.id == null)
      return null;

    return this.repository.update(tagType)
  };

  delete =  (id: number): Boolean => {
    return this.repository.delete(id)
  };
}