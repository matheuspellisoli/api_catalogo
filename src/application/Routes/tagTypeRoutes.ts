import {Routes} from './routes';
import {TagTypeService} from "../../domain/Service/tagTypeService"
import {TagType} from '../../domain/Model/tagType'
import express from 'express';

export class TagTypeRoutes extends Routes {
    tagTypeService : TagTypeService;

    constructor(app: express.Application,tagTypeService : TagTypeService) {
        super(app, 'tagTypes');
        this.tagTypeService = tagTypeService;
    }

    configureRoutes() {        
        this.app.route(`/api/tagtype`)
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(Object.values(this.tagTypeService.findAll()));
        })
        .post((req: express.Request, res: express.Response) => {
            
            try {  
                
                let tagType = new TagType(null, req.body.description,req.body.visible);                
                tagType = this.tagTypeService.create(tagType)
                res.status(200).send(tagType);              
              } catch (e) {
                console.error(e);
              }
        });

        this.app.route(`/api/tagtype/:id`)
        .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
            let id = Number(`${req.params.id}`);
            if(id == NaN)
            res.status(400).send('id required');
            next();
        })
        .get((req: express.Request, res: express.Response) => {
            let id = Number(`${req.params.id}`);
            let tagType = this.tagTypeService.findById(id);

            if(tagType)
                res.status(200).send(tagType);

            res.status(404).send('resource not found');
        })
        .put((req: express.Request, res: express.Response) => {           
            let tagType = new TagType(req.body.id, req.body.description,req.body.visible);
            tagType = this.tagTypeService.update(tagType)
            res.status(200).send(tagType);
        })
        .delete((req: express.Request, res: express.Response) => {
            let id = Number(`${req.params.id}`);
            this.tagTypeService.delete(id)
            res.status(200).send(`DELETE requested for id ${req.params.id}`);
        });
        return this.app;
    }

}