import {Routes} from './routes';
import express from 'express';
import {v4 as uuidv4} from 'uuid';
import { UserService } from '../domain/Service/userService';
import { UserConverter } from '../application/converter/userConverter';
import { UserDTO } from '../application/dto/userDTO';
import { LoginDTO } from '../application/dto/loginDTO';


export class UserRoutes extends Routes {
    private userService : UserService;
    private userConvert : UserConverter;

    constructor(app: express.Application, userService : UserService) {
        super(app, 'users');
        this.userService = userService;
        this.userConvert = new UserConverter();
    }

    configureRoutes() {        
        this.app.route(`/api/user`)
        .get((req: express.Request, res: express.Response) => {
            res.status(200).send(Object.values(this.userService.findAll()));
        })
        .post((req: express.Request, res: express.Response) => {            
            try {  
                let user = new UserDTO(uuidv4(), req.body.name, req.body.mail,
                 req.body.password, req.body.address, req.body.active, req.body.rules);

                 this.userConvert.toDTO(this.userService.create(this.userConvert.toModel(user)))
                 res.status(200).send(user);              
              } catch (e) {
                console.error(e);
              }
        });
        this.app.route(`/api/user/:id`)
        .get((req: express.Request, res: express.Response) => {
            let id = `${req.params.id}`
            let user = this.userService.findById(id);
            if(user)
                res.status(200).send(this.userConvert.toDTO(user));
            else
                res.status(404).send('resource not found');
        })
        .put((req: express.Request, res: express.Response) => {           
            let user = new UserDTO(req.body.id, req.body.name, req.body.mail,
                 req.body.password, req.body.address, req.body.active, req.body.rules);

                 this.userConvert.toDTO(this.userService.update(this.userConvert.toModel(user)))
                 res.status(200).send(user);   
        })
        .delete((req: express.Request, res: express.Response) => {
            let id = `${req.params.id}`
            this.userService.delete(id)
            res.status(200).send(`DELETE requested for id ${req.params.id}`);
        });

        this.app.route(`/api/login`)
        .post((req: express.Request, res: express.Response) => {            
            try {  

                let userLogin = new LoginDTO(req.body.mail, req.body.password);                
                let user = this.userService.findByEmail(userLogin.mail);

                
                if(user.getPassword() == userLogin.password){
                    let token = uuidv4();
                    user.setToken(token);
                    this.userService.update(user);

                    res.status(200).send({"token" : token}); 
                }else{
                    res.status(403).send("Forbidden"); 
                }
                            
              } catch (e) {
                console.error(e);
              }
        });
        return this.app;
    }

}