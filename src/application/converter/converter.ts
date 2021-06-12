export interface Converter<DTO, Model>{
    toModel(dto: DTO) : Model;
    toDTO(model: Model) : DTO;    
}