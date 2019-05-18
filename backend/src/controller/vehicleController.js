'use strict'

const repository = require('../repository/vehicleRepository')

exports.createVehicle = async (req, res) => {
    try {
        const data = await repository.createVehicle(req)

        if(data) {
            res.status(201).json({
                data: {},
                message: 'Vehicle created successfully',
                erro: {}
            })
            return
        }

        res.status(400).json({
            data: {},
            message: 'Vehicle already exists',
            erro: {}
        })
        return
    }
    catch(err) {
        res.status(500).json({
            data: {},
            message: 'Bad request on create vehicle',
            erro: err.message
        })
    }
}

exports.updateVehicle = async (req, res) => {
    try {
        const data = await repository.updateVehicle(req)

        if(data[0]) {
            res.status(202).json({
                data: {},
                message: 'Vehicle updated successfully',
                erro: {}
            })
            return
        }

        res.status(400).json({
            data: {},
            message: 'Vehicle not found',
            erro: {}
        })
        return
    }
    catch(err) {
        res.status(500).json({
            data: {},
            message: 'Bad request on update vehicle',
            erro: err.message
        })
    }
}

exports.removeVehicle = async (req, res) => {
    try {
        const data = await repository.removeVehicle(req)

        if(data) {
            res.status(202).json({
                data: {},
                message: 'Vehicle deleted successfully',
                erro: {}
            })
            return
        }

        res.status(400).json({
            data: {},
            message: 'Vehicle in use',
            erro: {}
        })
        return
    }
    catch(err) {
        res.status(500).json({
            data: {},
            message: 'Bad request on delete vehicle',
            erro: err.message
        })
    }
}

exports.getOneVehicle = async (req, res) => {
    try {
        const data = await repository.getOneVehicle(req)

        if(data) {
            res.status(200).json({
                data,
                message: 'Vehicle founded',
                erro: {}
            })
            return
        }

        res.status(400).json({
            data: {},
            message: 'Vehicle not found',
            erro: {}
        })
        return
    }
    catch(err) {
        res.status(500).json({
            data: {},
            message: `Bad request on find ${req.params.vehicleId} vehicle`,
            erro: err.message
        })
    }
}

exports.getAllVehicle = async (req, res) => {
    try {
        const data = await repository.getAllVehicle(req)

        if(data[0]) {
            res.status(200).json({
                data,
                message: 'Vehicles found successfully',
                erro: {}
            })
            return
        }

        res.status(400).json({
            data: {},
            message: "There's no vehicles",
            erro: {}
        })
        return
    }
    catch(err) {
        res.status(500).json({
            data: {},
            message: 'Bad request on find all vehicles',
            erro: err.message
        })
    }
}