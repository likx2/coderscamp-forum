import { Router, Request, Response } from 'express'
import { Hashtag as hashtagModel } from '../models/hashtag'

export const topHashtagRouter = Router()

topHashtagRouter.get('/', async (req: Request, res: Response) => {
    const allHastags = await hashtagModel.find().sort({ counter: -1 }).limit(10)
    res.send(allHastags)

})
