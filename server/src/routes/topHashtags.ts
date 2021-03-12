import { Router, Request, Response } from 'express'
import { Hashtag } from '../models/hashtag'
import { Post } from '../models/post'

export const topHashtagRouter = Router()

topHashtagRouter.get('/', async (req: Request, res: Response) => {
    const allHastags = await Hashtag.find().sort({ amount: -1 }).limit(10)
    res.send(allHastags)

})
topHashtagRouter.get('/:hashtagName', async (req: Request, res: Response) => {
    const { hashtagName } = req.params
    try {
        const foundPosts = await Post.find({ hashtags: hashtagName })
        res.send(foundPosts)
    }
    catch (err) {
        res.status(404).send(err)
    }

})
