import { model, Schema } from 'mongoose'
import { Comment as CommentType } from '../types/Comment'
import { Reaction } from '../types/Reaction'

const commentSchema: Schema = new Schema(
  {
    author: {
      ref: 'User',
      type: Schema.Types.ObjectId,
      required: true,
    },
    post: {
      ref: 'Post',
      type: Schema.Types.ObjectId,
      required: true,
    },
    content: {
      type: String,
      minLength: 1,
      maxLength: 500,
      required: true,
    },
    reactions: {
      type: [Reaction],
    },
  },
  { timestamps: true },
)

export const Comment = model<CommentType>('Comment', commentSchema)
