import express from 'express'
import routes from './routes'

class App {
    public app = express()

    constructor() {
        this.middlewares()
        this.routes()
    }

    private middlewares() {
        this.app.use(express.json())
    }

    private routes() {
        this.app.use(routes)
    }
}

export default new App().app