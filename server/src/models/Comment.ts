import { Comment } from '../types/comment'
import { model, Schema } from 'mongoose'

const commentSchema: Schema = new Schema({
  author: {
    ref: 'User',
    type: Schema.Types.ObjectId,
  },
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  dislikes: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now()
  }
})

export default model<Comment>('Comment', commentSchema)
