import Joi from 'joi'
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

export function validateNewComment(comment: object): Joi.ValidationResult {
  const schema = Joi.object({
    content: Joi.string()
      .min(30)
      .max(10000)
      .required(),
  })
  return schema.validate(comment)
}

export const Comment = model<CommentType>('Comment', commentSchema)
