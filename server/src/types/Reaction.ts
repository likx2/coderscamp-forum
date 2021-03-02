import { Schema } from 'mongoose'

export const Reaction = new Schema({
  userId: String,
  reactionName: String,
})
