import User from '../models/User'
import { Request, Response } from 'express'

class UserController {

    public async index(req: Request, res: Response) {
        const users = await User.findAll()
        res.json(users)
    }

    public async show(req: Request, res: Response) {
        const { id } = req.params
        let user = await User.findByPk(id,{include:['posts']})        
        res.json(user)
    }

    public async store(req: Request, res: Response) {
        const { name, email, password } = req.body
        const user = await User.create({
            name,
            email,
            password
        })
        res.json(user)
    }

    public async update(req: Request, res: Response) {
        const { id } = req.params
        let user = await User.findByPk(id)
        await user?.update({ name: req.body.name })
        res.json(user)
    }

    public async destroy(req: Request, res: Response) {
        let user = await User.findByPk(req.params.id)
        await user?.destroy()
        res.json(user)
    }

}



export default new UserController()