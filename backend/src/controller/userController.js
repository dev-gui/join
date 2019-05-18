'use strict'

const repository = require('../repository/userRepository')

exports.createUser = async (req, res) => {
    try {
        const data = await repository.createUser(req)

        if(data) {
            res.status(201).json({
                data: {},
                message: 'User created successfully',
                erro: {}
            })
            return
        }

        res.status(400).json({
            data: {},
            message: 'User already exists',
            erro: {}
        })
        return
    }
    catch(err) {
        res.status(500).json({
            data: {},
            message: 'Bad request on create user',
            erro: err.message
        })
    }
}