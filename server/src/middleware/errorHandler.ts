import {Request, Response, NextFunction } from "express";

export default function errorHandler(err: Error, req: Request, res: Response, _: NextFunction) {
    console.error(err.message, err);
    res.status(500).send('Something failed.');
}