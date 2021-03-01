import jwt from 'jsonwebtoken'
import {Request, Response, NextFunction } from "express";
import IAuthTokenPayload from '../types/IAuthTokenPayload';
import IAuthenticatedRequest from '../types/IAuthenticatedRequest';

export default function auth(req: IAuthenticatedRequest, res: Response, next: NextFunction){
    //Read auth token from request
    const authToken = req.header('x-auth-token')
    if(!authToken){
        return res.status(401).send('Access denied. No auth token provided.')
    }

    try{
        //Decode provided token
        //generateAuthToken always should use IAuthTokenPayload to create payload so this typing should be save
        const decodedPayload = jwt.verify(authToken, process.env.JWT_PRIVATE_KEY!) as IAuthTokenPayload
        
        //Forward decoded user in request
        req.user = decodedPayload
        next();
    }catch(ex){
        return res.status(400).send('Invalid auth token provided.')
    }
}