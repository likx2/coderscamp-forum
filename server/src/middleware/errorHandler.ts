import { Request, Response } from 'express'

export function errorHandler(err: Error, req: Request, res: Response): void {
  console.error(err.message, err)
  res.status(500).send('Something failed.')
}
