import { Request, Response, Router } from 'express'
import { Post } from '../models/Post'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const posts = await Post.find({})

  //return 10 posts and sort by title
  // const posts = await Post
  //     .find({})
  //     .limit(10)
  //     .sort({title: 1})

  res.send(posts)
})

// router.get('/hashtag/:hashtag', async (req: Request, res: Response) => {
//   const hashtag = req.params.hashtag
//   const posts = await Post.find({ hashtags: `${hashtag}` })
//   res.send(posts)
// })

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id
  const post = await Post.find({ _id: id })
  res.send(post)
})

router.post('/', async (req: Request, res: Response) => {
  const hashtags = req.body.hashtags.split(' ')
  const newPost = new Post({
    // author: 'Wojtek',
    title: req.body.title,
    content: req.body.content,
    imageUrl: req.body.imageUrl,
    hashtags: hashtags,
  })

  router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    // const hashtags = req.body.hashtags.split(' ')
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        // hashtags: hashtags,
      },
      { new: true },
    )

    // redirect???
    res.send(updatedPost)
  })

  router.delete('/:id', async (req, res) => {
    const { id } = req.params
    await Post.findByIdAndDelete(id)

    // redirect???
    res.send('Post deleted')
  })

  await newPost.save()
  res.send(newPost)
  console.log('new post added')
})

export default router
