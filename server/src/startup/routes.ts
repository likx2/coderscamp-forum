import express, { Express } from 'express'
import cors from 'cors'
import errorHandler from '../middleware/errorHandler'

import authRouter from '../routes/auth'

//Handle async errors in request pipeline
require('express-async-errors')

export default function startupRoutes(app: Express){
    app.use(cors())
    app.use(express.json())

    app.use('/', authRouter)

    //error handling middleware in request pipeline
    app.use(errorHandler)
}