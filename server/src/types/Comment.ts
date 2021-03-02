import { Document } from 'mongoose'

export interface Comment extends Document {
  author: string
  content: string
  likes: number
  dislikes: number
}
