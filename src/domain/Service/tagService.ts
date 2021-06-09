import {Tag} from "../Model/tag";
import {TagRepository} from "../interfaces/tagRepository";

export class TagService {
  repository : TagRepository;

  constructor(repository : TagRepository){
    this.repository = repository;
  }

  findAll =  (): Tag[] => {
    return this.repository.findAll();
  };

  findById =  (id: number): Tag => {
    return this.repository.findById(id);
  };

  create =  (tag: Tag): Tag => {
    return this.repository.create(tag);
  };

  update =  (tag: Tag): Tag  => {
    if(tag.id == null)
      return null;

    return this.repository.update(tag)
  };

  delete =  (id: number): Boolean => {
    return this.repository.delete(id)
  };
}
