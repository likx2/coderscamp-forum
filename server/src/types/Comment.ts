import { Document } from 'mongoose'
import { ReactionInterface } from './Reaction'

export interface Comment extends Document {
  author: string
  content: string
  reactions: [ReactionInterface]
}
