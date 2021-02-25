import startupDB from "./database";

import express, { Express } from 'express'
import cors from 'cors'
import errorHandler from '../middleware/errorHandler'

//Handle async errors in request pipeline
require('express-async-errors')

export default function startupRoutes(app: Express){
    app.use(cors())
    app.use(express.json())

    //error handling middleware in request pipeline
    app.use(errorHandler)
}