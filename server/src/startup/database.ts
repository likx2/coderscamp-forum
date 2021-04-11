import mongoose from 'mongoose'

export function startupDB(): void {
  // Get env variables
  const MONGO_USER: string = process.env.MONGO_USER || 'CC-Forum-App'
  const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || 'bad-pass'
  const MONGO_DB: string = process.env.MONGO_DB || 'CC-Forum'

  // Set connection string
  const uri: string = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.mbxs0.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`
 

  // Connection otions
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
  mongoose.set('useFindAndModify', false)

  // Connect to DB
  mongoose.connect(uri, options).catch((error) => {
    throw error
  })
}
