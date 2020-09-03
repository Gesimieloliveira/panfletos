import express from 'express';
import routes from './routes';

class App {
    //Metodo contruto é chamdo automaticamente toda vez que instaciar a class App
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());

    }

    routes() {
        this.server.use(routes);
    }
}

export default new App(). server;