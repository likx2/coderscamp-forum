import mongoose from 'mongoose'

export default function startupDB() {
    //Get env variables
    const MONGO_USER: string = process.env.MONGO_USER || 'CC-Forum-App';
    const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || 'bad-pass';
    const MONGO_DB: string = process.env.MONGO_DB || 'CC-Forum';

    //Set connection string
    const uri: string = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cc-forum.4k1nv.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`

    //Connection otions
    const options = { useNewUrlParser: true, useUnifiedTopology: true }
    mongoose.set('useFindAndModify', false)

    //Connect to DB
    mongoose
        .connect(uri, options)
        .catch((error) => {
            throw error
        })
};