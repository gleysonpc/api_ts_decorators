import { Router } from 'express'
import UserController from './controllers/UserController'
import PostController from './controllers/PostController'

const routes = Router()

routes.get('/', (req, res) => {
    res.send('My Api')
})

//Users Routes
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

//Posts Routes
routes.get('/posts', PostController.index)
routes.post('/posts', PostController.store)
routes.put('/posts/:id', PostController.update)
routes.delete('/posts/:id', PostController.destroy)

export default routes