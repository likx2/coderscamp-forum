import IAuthTokenPayload from './IAuthTokenPayload'
import {Request} from 'express'
export default interface IAuthenticatedRequest extends Request{
    user?: IAuthTokenPayload
}
