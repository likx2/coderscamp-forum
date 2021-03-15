import { Schema } from 'mongoose'

export const Reaction = new Schema({
  userId: String,
  reactionName: String,
})

export interface ReactionInterface {
  userId: String,
  reactionName: String,
}