import express, { Express } from 'express'
import dotenv from 'dotenv'

import startupDB from './startup/database'
import startupRoutes from './startup/routes'

//Config dotenv
dotenv.config()

//Startup database
startupDB();

//Startup routes
const app: Express = express()
startupRoutes(app);

//Run server
const PORT: string | number = process.env.PORT || 4000
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`))
