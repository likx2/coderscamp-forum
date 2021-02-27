import mongoose from 'mongoose'
import express from 'express'
import bcrypt from 'bcrypt'
import _ from 'lodash'

import { User, validateNewUser } from '../models/user'

const router = express.Router()

router.post('/register', async (req, res) => {
    //Check request validity
    const { error } = validateNewUser(req.body)
    if (error) {
        return res.status(400).send(error.details[0].message)
    }

    //Check if there is user with given name
    let existingUser = await User.findOne({ userName: req.body.userName })
    if (existingUser) {
        return res.status(400).send('User with given name already exist.')
    }

    //Check if there is user with given email
    existingUser = await User.findOne({ email: req.body.email })
    if (existingUser) {
        return res.status(400).send('User with given email already exist.')
    }

    //Register new user
    let newUser = new User(_.pick(req.body, ['userName', 'email', 'password']))

    //Hash the password
    const saltRounds = 14
    await bcrypt.hash(newUser.password, saltRounds)
        .then(hash => {
            newUser.password = hash
        })

    await newUser.save()

    return res.status(201).send(_.pick(newUser, ['_id', 'userName', 'email']))
})

export default router