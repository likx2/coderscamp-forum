import mongoose, { Schema } from 'mongoose'
import Joi from 'joi'
import passwordComplexity from 'joi-password-complexity'
import jwt from 'jsonwebtoken'

import IUser from '../types/User'
import AuthTokenPayload from '../types/AuthTokenPayload'

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        minlength: 5,
        maxlength: 25
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        minlength: 5,
        maxlength: 255,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    password: {
        type: String,
        required: [true, "can't be blank"],
    }
})

userSchema.methods.generateAuthToken = function(){

    const jwtPrivateKey = process.env.JWT_PRIVATE_KEY!
    const payload: AuthTokenPayload = {
        _id: this._id
    }
    return jwt.sign(payload, jwtPrivateKey)
}

export function validateNewUser(user: object) {
    const passwordComplexityOptions = {
        min: 8,
        max: 50,
        lowerCase: 1,
        upperCase: 1,
        numeric: 1,
        symbol: 1,
        requirementCount: 6
    }
    const schema = Joi.object({
        userName: Joi.string().min(5).max(25).alphanum().required(),
        email: Joi.string().min(5).max(255).email().required(),
        password: passwordComplexity(passwordComplexityOptions).required()
    })

    return schema.validate(user)
}

export function validateLoginDetails(user: object) {
    const schema = Joi.object({
        login: Joi.string().required(),
        password: Joi.string().required()
    })

    return schema.validate(user);
}

export const User = mongoose.model<IUser>('User', userSchema);
