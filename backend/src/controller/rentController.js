'use strict'

const repository = require('../repository/rentRepository')

exports.createRent = async (req, res) => {
    try {
        const data = await repository.createRent(req)

        if(data) {
            res.status(201).json({
                data: {},
                message: 'Rent created successfully',
                erro: {}
            })
            return
        }

        res.status(400).json({
            data: {},
            message: 'Rent already exists',
            erro: {}
        })
        return
    }
    catch(err) {
        res.status(500).json({
            data: {},
            message: 'Bad request on create rent',
            erro: err.message
        })
    }
}

exports.updateRent = async (req, res) => {
    try {
        const data = await repository.updateRent(req)

        if(data[0]) {
            res.status(202).json({
                data: {},
                message: 'Rent updated successfully',
                erro: {}
            })
            return
        }

        res.status(400).json({
            data: {},
            message: 'Rent not found',
            erro: {}
        })
        return
    }
    catch(err) {
        res.status(500).json({
            data: {},
            message: 'Bad request on update rent',
            erro: err.message
        })
    }
}

exports.getOneRent = async (req, res) => {
    try {
        const data = await repository.getOneRent(req)

        if(data) {
            res.status(200).json({
                data,
                message: 'Rent founded',
                erro: {}
            })
            return
        }

        res.status(400).json({
            data: {},
            message: 'Rent not found',
            erro: {}
        })
        return
    }
    catch(err) {
        res.status(500).json({
            data: {},
            message: `Bad request on find ${req.params.leasingId} rent`,
            erro: err.message
        })
    }
}

exports.getAllRent = async (req, res) => {
    try {
        const data = await repository.getAllRent(req)

        if(data[0]) {
            res.status(200).json({
                data,
                message: 'Rents found successfully',
                erro: {}
            })
            return
        }

        res.status(400).json({
            data: {},
            message: "There's no rents",
            erro: {}
        })
        return
    }
    catch(err) {
        res.status(500).json({
            data: {},
            message: 'Bad request on find all rents',
            erro: err.message
        })
    }
}