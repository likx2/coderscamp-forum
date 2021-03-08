import { Schema, model } from 'mongoose'
import Hashtag from '../types/Hashtag'


const hashtagSchema = new Schema({
    hashtagName: String,
    counter: {
        type: Number,
        default: 0
    }
})

export const Hashtag = model<Hashtag>('Hashtag', hashtagSchema)
