///https://auth0.com/blog/node-js-and-typescript-tutorial-build-a-crud-api/

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

// import { itemsRouter } from "./domain/items/routes";
import { errorHandler } from "./middleware/errorMiddleware";
import { notFoundHandler } from "./middleware/notFoundMiddleware";

import {Routes} from './application/Routes/routes';
import {ItemRoutes} from './application/Routes/itemRoutes';

import {ItemRepositoryImp} from "./infra/repository/itemRepositoryImp"
import {ItemService} from "./domain/Service/ItemService"

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

routes.push(new ItemRoutes(app, new ItemService(new ItemRepositoryImp())));

app.use(errorHandler);
app.use(notFoundHandler);

app.use(routes.map(x => x.configureRoutes));

app.listen(PORT, () => {
    routes.forEach((route: Routes) => {
        console.log(`Routes configured for ${route.getName()}`);
    });
    console.log(`Listening on port ${PORT}`);   
});