import Post from '../models/Post'
import { Request, Response } from 'express'

class PostController {

    public async index(req: Request, res: Response) {
        const posts = await Post.findAll()
        res.json(posts)
    }


    public async store(req: Request, res: Response) {
        const { title, body, user_id} = req.body
        const post = await Post.create({
            title,
            body,
            user_id
        })
        res.json(post)
    }

    public async update(req: Request, res: Response) {
        const { id } = req.params
        let post = await Post.findByPk(id)
        await post?.update({ title: req.body.title, body: req.body.body })
        res.json(post)
    }

    public async destroy(req: Request, res: Response) {
        let post = await Post.findByPk(req.params.id)
        await post?.destroy()
        res.json(post)
    }



}



export default new PostController()