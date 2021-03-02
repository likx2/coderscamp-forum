import { Document } from 'mongoose'

export default interface User extends Document{
    username: string
    email: string
    password: string
    generateAuthToken: ()=>string
}