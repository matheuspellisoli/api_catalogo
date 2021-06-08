import {TagType} from "../Model/tagType";
import {TagTypesRepository} from "../interfaces/tagTypesRepository";

class TagTypeService {

  repository : TagTypesRepository;

  constructor(repository : TagTypesRepository){
    this.repository = repository;
  }

  findAll = async (tagType: TagType): Promise<TagType[]> => {
    return this.repository.findAll();
  };

  findById = async (id: number): Promise<TagType> => {
    return this.repository.findById(id);
  };

  create = async (tagType: TagType): Promise<TagType> => {
    return this.repository.create(tagType);
  };

  update = async (tagType: TagType): Promise<TagType | null> => {

    if(tagType.id == null)
      return null;

    return this.repository.update(tagType)
  };

  delete = async (id: number): Promise<null | void> => {
    this.repository.delete(id)
  };
}