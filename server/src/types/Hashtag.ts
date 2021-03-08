import { Document } from 'mongoose'
export default interface Hashtag extends Document {
    hashtagName: string,
    counter: number
}