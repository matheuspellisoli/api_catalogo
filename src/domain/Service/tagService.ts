import {Tag} from "../Model/tag";
import {TagRepository} from "../interfaces/tagRepository";

class TagService {
  repository : TagRepository;

  constructor(repository : TagRepository){
    this.repository = repository;
  }

  findAll = async (): Promise<Tag[]> => {
    return this.repository.findAll();
  };

  findById = async (id: number): Promise<Tag> => {
    return this.repository.findById(id);
  };

  create = async (tag: Tag): Promise<Tag> => {
    return this.repository.create(tag);
  };

  update = async (tag: Tag): Promise<Tag | null> => {
    if(tag.id == null)
      return null;

    return this.repository.update(tag)
  };

  delete = async (id: number): Promise<null | void> => {
    this.repository.delete(id)
  };
}
