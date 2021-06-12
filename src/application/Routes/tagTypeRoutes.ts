import {Routes} from './routes';
import {TagTypeService} from "../../domain/Service/tagTypeService"
import {TagTypeDTO} from '../dto/tagTypeDTO'
import express from 'express';
import { TagTypeConverter } from '../converter/tagTypeConverter';
import {v4 as uuidv4} from 'uuid';

export class TagTypeRoutes extends Routes {
    private tagTypeService : TagTypeService;
    private tagTypeConvert : TagTypeConverter;

    constructor(app: express.Application,tagTypeService : TagTypeService) {
        super(app, 'tagTypes');
        this.tagTypeService = tagTypeService;
        this.tagTypeConvert = new TagTypeConverter();
    }

    configureRoutes() {        
        this.app.route(`/api/tagtype`)
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(Object.values(this.tagTypeService.findAll()));
        })
        .post((req: express.Request, res: express.Response) => {
            
            try {  
                
                let tagType = new TagTypeDTO(uuidv4(), req.body.description,req.body.visible, req.body.list, req.body.listvalues, req.body.visible.active);                
                tagType = this.tagTypeConvert.toDTO(this.tagTypeService.create(this.tagTypeConvert.toModel(tagType)))
                res.status(200).send(tagType);              
              } catch (e) {
                console.error(e);
              }
        });

        this.app.route(`/api/tagtype/:id`)
        .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
            next();
        })
        .get((req: express.Request, res: express.Response) => {
            let id = `${req.params.id}`;
            let tagType = this.tagTypeService.findById(id);

            if(tagType)
                res.status(200).send(tagType);

            res.status(404).send('resource not found');
        })
        .put((req: express.Request, res: express.Response) => {           
            let tagType = new TagTypeDTO(req.body.id, req.body.description,req.body.visible, req.body.list, req.body.listvalues, req.body.visible.active);                
            tagType = this.tagTypeConvert.toDTO(this.tagTypeService.create(this.tagTypeConvert.toModel(tagType)))
            res.status(200).send(tagType);
        })
        .delete((req: express.Request, res: express.Response) => {
            let id = `${req.params.id}`;
            this.tagTypeService.delete(id)
            res.status(200).send(`DELETE requested for id ${req.params.id}`);
        });
        return this.app;
    }

}