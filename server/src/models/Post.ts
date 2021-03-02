import { model, Schema } from 'mongoose'
import { Post as PostType } from '../types/Post'
import { Reaction } from '../types/Reaction'

const postSchema: Schema = new Schema(
  {
    author: {
      ref: 'User',
      type: Schema.Types.ObjectId,
      required: true,
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
      maxLength: 10000,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    hashtags: {
      type: [String],
      required: true,
    },
    reactions: {
      type: [Reaction],
    },
  },
  { timestamps: true },
)

export const Post = model<PostType>('Post', postSchema)
