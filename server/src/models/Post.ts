import { IPost } from '../types/IPost'
import { model, Schema } from 'mongoose'

const postSchema: Schema = new Schema({
  author: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    minLength: 10,
    maxLength: 100,
    required: true,
  },
  content: {
    type: String,
    minLength: 30,
    maxLength: 5000,
    required: true,
  },
  imageUrl: {
    type: [String],
  },
  hashtags: {
    type: [String],
    required: true,
  }
},
  { timestamps: true })

const Post = model<IPost>('Post', postSchema)
export default Post
