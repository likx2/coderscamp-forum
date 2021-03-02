import jwt from 'jsonwebtoken'
import { Response, NextFunction } from "express";
import AuthTokenPayload from '../types/AuthTokenPayload';
import AuthenticatedRequest from '../types/AuthenticatedRequest';

export default function auth(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    //Read auth token from request
    const authToken = req.header('x-auth-token')
    if (!authToken) {
        return res.status(401).send('Access denied. No auth token provided.')
    }

    jwt.verify(authToken, process.env.JWT_PRIVATE_KEY!, (err, decoded) => {
        if (err) {
            return res.status(401).send(err.message)
        }

        //Decode provided token
        //generateAuthToken always should use IAuthTokenPayload to create payload so this typing should be save
        const decodedPayload = decoded as AuthTokenPayload

        //Forward decoded user in request
        req.user = decodedPayload
        next();
    })
}