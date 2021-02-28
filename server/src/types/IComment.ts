import { Document } from 'mongoose'

export interface IComment extends Document {
  author: string
  content: string
  likes: number
  dislikes: number
  date: Date
}
