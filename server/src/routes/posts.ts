import { Request, Response, Router } from 'express'
import { Post, validateNewPost } from '../models/Post'
import { auth } from '../middleware/auth'
import jwt from 'jsonwebtoken'
import { values } from 'lodash'

const router = Router()

router.get('/:id', auth, async (req: Request, res: Response) => {
  const id = req.params.id
  await Post.find({ _id: id })
    .then((post) => {
      res.status(200).send(post)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
})

router.post('/', auth, async (req: Request, res: Response) => {
  const token: string = req.header('x-auth-token')!
  const userID = jwt.verify(token, process.env.JWT_PRIVATE_KEY!)

  const { error, value } = validateNewPost(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }

  const newPost = new Post({
    ...value,
    author: userID,
  })

  newPost.save((err) => {
    if (err) {
      res.status(401).send(err)
    }
    res.status(201).send(newPost)
  })
})

router.put('/:id', auth, async (req: Request, res: Response) => {
  const { id } = req.params
  const { error, value } = validateNewPost(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }
  const updatedPost = await Post.findByIdAndUpdate(id, { ...value }, { new: true })
  res.status(200).send(updatedPost)
})

router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params
  await Post.findByIdAndDelete(id)
    .then(() => res.status(201).send('Post deleted'))
    .catch((err) => res.send(err))
})

export default router
