import {Routes} from './routes';
import {ItemService} from "../../domain/Service/ItemService"
import {ItemDTO} from '../dto/itemDTO'
import express from 'express';
import { itemConverter } from '../converter/itemConverter';

export class ItemRoutes extends Routes {
    private itemService : ItemService;
    private itemConvert : itemConverter;

    constructor(app: express.Application,itemService : ItemService) {
        super(app, 'items');
        this.itemService = itemService;
        this.itemConvert = new itemConverter();
    }

    configureRoutes() {        
        this.app.route(`/api/item`)
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(Object.values(this.itemService.findAll()));
        })
        .post((req: express.Request, res: express.Response) => {
            
            try {  
                let item = new ItemDTO(null, req.body.title, req.body.description, req.body.price, req.body.tags, req.body.images, req.body.active);                
                item = this.itemConvert.toDTO(this.itemService.create(this.itemConvert.toModel(item)));
                res.status(200).send(item);              
              } catch (e) {
                console.error(e);
              }
        });

        this.app.route(`/api/item/:itemID`)
        .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
            let id = Number(`${req.params.itemID}`);
            if(id == NaN)
            res.status(400).send('id required');
            next();
        })
        .get((req: express.Request, res: express.Response) => {
            let id = Number(`${req.params.itemID}`);
            let item = this.itemService.findById(id);

            if(item)
                res.status(200).send(item);

            res.status(404).send('resource not found');
        })
        .put((req: express.Request, res: express.Response) => {           
            let item = new ItemDTO(req.body.id, req.body.title, req.body.description, req.body.price, req.body.tags, req.body.images, req.body.active);                
            item = this.itemConvert.toDTO(this.itemService.create(this.itemConvert.toModel(item)));
            res.status(200).send(item);
        })
        .delete((req: express.Request, res: express.Response) => {
            let id = Number(`${req.params.itemID}`);
            this.itemService.delete(id)
            res.status(200).send(`DELETE requested for id ${req.params.itemID}`);
        });
        return this.app;
    }

}