import { Document } from 'mongoose'

export interface IPost extends Document {
  author: string
  title: string
  content: string
  imageUrl: string
  hashtags: string[]
}
