import mongoose from 'mongoose'
import Joi from 'joi'
import passwordComplexity from 'joi-password-complexity'

import IUser from '../types/IUser'

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

export const User = mongoose.model<IUser>('User', userSchema);
