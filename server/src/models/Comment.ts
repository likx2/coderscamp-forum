import { IComment } from '../types/IComment'
import { model, Schema } from 'mongoose'

const commentSchema: Schema = new Schema({
  author: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: true
  },
  post: {
    ref: 'Post',
    type: Schema.Types.ObjectId,
    required: true
  },
  content: {
    type: String,
    minLength: 10,
    maxLength: 500,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  dislikes: {
    type: Number,
    required: true,
  }
},
  { timestamps: true })

const Comment = model<IComment>('Comment', commentSchema)
export default Comment