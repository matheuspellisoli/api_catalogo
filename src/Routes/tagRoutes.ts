import {Routes} from './routes';
import {TagService} from "../domain/Service/tagService"
import {TagDTO} from '../application/dto/tagDTO'
import express from 'express';
import { TagConverter } from '../application/converter/tagConverter';
import {v4 as uuidv4} from 'uuid';

export class TagRoutes extends Routes {
    private tagService : TagService;
    private tagCoverter : TagConverter;
    
    constructor(app: express.Application,tagService : TagService) {
        super(app, 'tags');
        this.tagService = tagService;
        this.tagCoverter = new TagConverter();
    }

    configureRoutes() {        
        this.app.route(`/api/tag`)
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(Object.values(this.tagService.findAll()));
        })
        .post((req: express.Request, res: express.Response) => {
            
            try {  
                
                let tag = new TagDTO(uuidv4(), req.body.value,req.body.type, req.body.active);                
                tag = this.tagCoverter.toDTO(this.tagService.create(this.tagCoverter.toModel(tag)))
                res.status(200).send(tag);              
              } catch (e) {
                console.error(e);
              }
        });

        this.app.route(`/api/tag/:id`)
        .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
            next();
        })
        .get((req: express.Request, res: express.Response) => {
            let id = `${req.params.id}`
            let item = this.tagService.findById(id);

            if(item)
                res.status(200).send(item);

            res.status(404).send('resource not found');
        })
        .put((req: express.Request, res: express.Response) => {           
            let tag = new TagDTO(req.body.id, req.body.value,req.body.type, req.body.active); 
            tag = this.tagCoverter.toDTO(this.tagService.update(this.tagCoverter.toModel(tag)))
            res.status(200).send(tag);
        })
        .delete((req: express.Request, res: express.Response) => {
            let id = `${req.params.id}`
            this.tagService.delete(id)
            res.status(200).send(`DELETE requested for id ${req.params.id}`);
        });
        return this.app;
    }

}