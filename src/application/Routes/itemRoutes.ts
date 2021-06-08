import {Routes} from './routes';
import {ItemService} from "../../domain/Service/ItemService"
import {Item} from '../../domain/Model/item'
import express from 'express';

export class ItemRoutes extends Routes {
    itemService : ItemService;

    constructor(app: express.Application,itemService : ItemService) {
        super(app, 'items');
        this.itemService = itemService;
    }

    configureRoutes() {        
        this.app.route(`/api/item`)
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(Object.values(this.itemService.findAll()));
        })
        .post((req: express.Request, res: express.Response) => {
            
            try {  
                let item = new Item(null, req.body.title, req.body.description, req.body.price, req.body.tags, req.body.images, req.body.active);                
                item = this.itemService.create(item)
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
            res.status(200).send(this.itemService.findById(id));
        })
        .put((req: express.Request, res: express.Response) => {           
            let item = new Item(req.body.id, req.body.title, req.body.description, req.body.price, req.body.tags, req.body.images, req.body.active);                
            item = this.itemService.update(item)
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