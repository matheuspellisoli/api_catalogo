///https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

// import { itemsRouter } from "./domain/items/routes";
import { errorHandler } from "./middleware/errorMiddleware";
import { notFoundHandler } from "./middleware/notFoundMiddleware";

import {Routes} from './Routes/routes';
import {TagRoutes} from './Routes/tagRoutes';
import {TagTypeRoutes} from './Routes/tagTypeRoutes';

import {ItemService} from "./domain/Service/ItemService"

import {TagRepositoryImp} from "./infra/repository/tagRepositoryImp"
import {TagService} from "./domain/Service/tagService"

import {TagTypeRepositoryImp} from "./infra/repository/tagTypeRepositoryImp"
import {TagTypeService} from "./domain/Service/tagTypeService"
import { ItemRoutes } from "./Routes/itemRoutes";
import { UserRoutes } from "./Routes/userRoutes";
import { UserService } from "./domain/Service/userService";
import { UserRepositoryImp } from "./infra/repository/userRepositoryImp";
import { ItemRepositoryImp } from "./infra/repository/itemRepositoryImp";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
 }

 const PORT: number = parseInt(process.env.PORT as string, 10);
 const app = express();
 const routes: Array<Routes> = [];

app.use(helmet());
app.use(cors());
app.use(express.json());

routes.push(new UserRoutes(app, new UserService(new UserRepositoryImp())));
routes.push(new ItemRoutes(app, new ItemService(new ItemRepositoryImp())));
routes.push(new TagRoutes(app, new TagService(new TagRepositoryImp())));
routes.push(new TagTypeRoutes(app, new TagTypeService(new TagTypeRepositoryImp())));

app.use(errorHandler);
app.use(notFoundHandler);

app.use(routes.map(x => x.configureRoutes));

app.listen(PORT, () => {
    routes.forEach((route: Routes) => {
        console.log(`Routes configured for ${route.getName()}`);
    });
    console.log(`Listening on port ${PORT}`);   
});