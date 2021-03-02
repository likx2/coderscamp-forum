import AuthTokenPayload from './AuthTokenPayload'
import {Request} from 'express'
export default interface AuthenticatedRequest extends Request{
    user?: AuthTokenPayload
}
