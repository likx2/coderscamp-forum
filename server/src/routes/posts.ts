import { Request, Response, Router } from 'express'
import { Post, validateNewPost } from '../models/Post'
import { Comment, validateNewComment } from '../models/Comment'
import { auth } from '../middleware/auth'
import { AuthenticatedRequest } from '../types/AuthenticatedRequest'

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

postRouter.get('/', auth, async (req: AuthenticatedRequest, res) => {
  const page = req.query.page ? parseInt(req.query.page as string) : 1
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10
  await Post.find()
    .skip((page - 1) * limit)
    .limit(limit)
    .then((posts) => {
      if (!posts) {
        res.status(404).send('None posts found.')
      } else {
        res.status(200).send(posts)
      }
    })
})

postRouter.get('/ranking/:hashtag', auth, async (req: AuthenticatedRequest, res) => {
  const { hashtag } = req.params
  const sortingParameter = req.query.type ? req.query.type : 'reactions'
  const page = req.query.page ? parseInt(req.query.page as string) : 1
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10

  const getSortedByComments = async (hashtag: string): Promise<any> => {}

  const getSortedByReactions = async (hashtag: string): Promise<any> => {
    return Post.aggregate([
      {
        '$project': {
          'author': 1,
          'title': 1,
          'content': 1,
          'imageUrl': 1,
          'hashtags': 1,
          'reactions': 1,
          'length': { '$size': `$reactions` },
          'containsHashtags': { '$in': [hashtag, '$hashtags'] },
        },
      },
      { '$match': { 'containsHashtags': { '$eq': true } } },
      { '$sort': { 'length': -1 } },
      { '$skip': (page - 1) * limit },
      { '$limit': limit },
    ])
  }
})

postRouter.post('/:id/comments', auth, async (req: AuthenticatedRequest, res: Response) => {
  await Post.findById(req.params.id).then((post) => {
    if(!post){
      return res.status(404).send("Post not found")
    }
    const { error, value } = validateNewComment(req.body)
    if (error) {
      return res.status(400).send(error.details[0].message)
    }

    const newComment = new Comment({
      ...value,
      author: req.user?._id,
      post: post._id,
    })

    newComment.save((err) => {
      if (err) {
        res.status(401).send(err)
      } else {
        res.status(201).send(newComment)
      }
    })
  }).catch(err => {
    return res.status(403).send("Wrong request.")
  })
})
