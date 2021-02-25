import { Post } from '../types/post'
import { model, Schema } from 'mongoose'

const postSchema: Schema = new Schema({
  author: {
    ref: 'User',
    type: Schema.Types.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  hashtags: {
    type: [String],
    required: true,
  },
})

export default model<Post>('Post', postSchema)
