import {Routes} from './routes';
import {TagService} from "../../domain/Service/tagService"
import {TagDTO} from '../dto/tagDTO'
import express from 'express';
import { TagConverter } from '../converter/tagConverter';

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
                
                let tag = new TagDTO(null, req.body.description,req.body.type, req.body.active);                
                tag = this.tagCoverter.toDTO(this.tagService.create(this.tagCoverter.toModel(tag)))
                res.status(200).send(tag);              
              } catch (e) {
                console.error(e);
              }
        });

        this.app.route(`/api/tag/:id`)
        .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
            let id = Number(`${req.params.id}`);
            if(id == NaN)
            res.status(400).send('id required');
            next();
        })
        .get((req: express.Request, res: express.Response) => {
            let id = Number(`${req.params.id}`);
            let item = this.tagService.findById(id);

            if(item)
                res.status(200).send(item);

            res.status(404).send('resource not found');
        })
        .put((req: express.Request, res: express.Response) => {           
            let tag = new TagDTO(req.body.id, req.body.description,req.body.type, req.body.active); 
            tag = this.tagCoverter.toDTO(this.tagService.create(this.tagCoverter.toModel(tag)))
            res.status(200).send(tag);
        })
        .delete((req: express.Request, res: express.Response) => {
            let id = Number(`${req.params.id}`);
            this.tagService.delete(id)
            res.status(200).send(`DELETE requested for id ${req.params.id}`);
        });
        return this.app;
    }

}