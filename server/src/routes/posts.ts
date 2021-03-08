import { Request, Response, Router } from 'express'
import { Post, validateNewPost } from '../models/post'
import { auth } from '../middleware/auth'
import { AuthenticatedRequest } from '../types/AuthenticatedRequest'
import { Hashtag as hashtagModel } from '../models/hashtag'
import { fromPairs } from 'lodash'
import {hashtagAddOrUpdate, hashtagDelete} from '../helpers/hashtagHelpers'

export const postRouter = Router()

postRouter.get('/:id', auth, async (req: AuthenticatedRequest, res: Response) => {
  const id = req.params.id
  await Post.findById(id)
    .then((post) => {
      if (post) {
        res.status(200).send(post)
      } else {
        res.status(404).send(`Post with ${id} not found!`)
      }
    })
    .catch((err) => {
      res.status(404).send(err.toString())
    })
})

postRouter.post('/', auth, async (req: AuthenticatedRequest, res: Response) => {
  const { error, value } = validateNewPost(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }
// Hashtag adding
  try{
    hashtagAddOrUpdate(req.body.hashtags)
  }
  catch(err){
    res.status(500).send(err)
  }

  const newPost = new Post({
    ...value,
    author: req.user?._id,
  })

  newPost.save((err) => {
    if (err) {
      res.status(401).send(err)
    } else {
      res.status(201).send(newPost)
    }
  })
})

postRouter.put('/:id', auth, async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params
  const { error, value } = validateNewPost(req.body)
  if (error) {
    return res.status(400).send(error.details[0].message)
  }
 // Hashtag updating
 try{
  hashtagAddOrUpdate(req.body.hashtags)
}
catch(err){
  res.status(500).send(err)
}

  await Post.findByIdAndUpdate(id, { ...value }, { new: true })
    .then((updatedPost) => {
      if (updatedPost) {
        res.status(200).send(updatedPost)
      } else {
        return res.status(404).send(`Post with ${id} not found. Cannot be updated.`)
      }
    })
    .catch((err) => {
      res.status(404).send(err.toString())
    })
})

postRouter.delete('/:id', auth, async (req, res) => {
  const { id } = req.params
  // Hashtag deleting
  try{
    hashtagDelete(req.body.hashtags)
  }
  catch(err){
    res.status(500).send(err)
  }
  await Post.findByIdAndDelete(id)
    .then((deletedPost) => {
      if (deletedPost) {
        res.status(200).send(deletedPost)
      } else {
        return res.status(404).send(`Post with ${id} not found. Cannot be deleted.`)
      }
    })
    .catch((err) => {
      res.status(404).send(err.toString())
    })
})


