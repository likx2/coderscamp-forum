import startupDB from './database'

import express, { Express } from 'express'
import cors from 'cors'

export default function startupRoutes(app: Express) {
  app.use(cors())
  app.use(express.json())
}
