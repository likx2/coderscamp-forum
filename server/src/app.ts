import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app: Express = express()
require('dotenv').config()


const PORT: string | number = process.env.PORT || 4000
const MONGO_USER: string = process.env.MONGO_USER || 'CC-Forum-App';
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || 'bad-pass';
const MONGO_DB: string = process.env.MONGO_DB || 'CC-Forum';
app.use(cors())

const uri: string = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cc-forum.4k1nv.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useFindAndModify', false)

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch((error) => {
        throw error
    })
