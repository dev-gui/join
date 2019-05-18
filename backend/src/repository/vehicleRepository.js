'use strict'

const rentRepository = require('./rentRepository')

exports.createVehicle = async req => {
    try {
        const db = req.app.src.config.db.models

        // Cria o veiculo se nao acha-lo pela placa
        return await db.vehicle.findOrCreate({
            where: {
                plate: req.body.plate
            },
            defaults: {...req.body}
        })
            .then(([user, created]) => {
                if(created) return true
                else return false
            })
    }
    catch(err) {
        throw err
    }
}

exports.updateVehicle = async req => {
    try {
        const db = req.app.src.config.db.models

        return await db.vehicle.update(req.body, {
            where: {
                vehicle_id: req.params.vehicleId
            }
        })
    }
    catch(err) {
        throw err
    }
}

exports.removeVehicle = async req => {
    try {
        const db = req.app.src.config.db.models

        // Busca na tabela de locacao o veiculo está alugado no momento
        const findRent = await rentRepository.getOneToRemoveVehicle(req)
        if(findRent) return false

        return await db.vehicle.destroy({
            where: {
                vehicle_id: req.params.vehicleId
            }
        })
    }
    catch(err) {
        throw err
    }
}

exports.getOneVehicle = async req => {
    try {
        const db = req.app.src.config.db.models

        return await db.vehicle.findOne({
            where: {
                vehicle_id: req.params.vehicleId
            }
        })
    }
    catch(err) {
        throw err
    }
}

exports.getAllVehicle = async req => {
    try {
        const db = req.app.src.config.db.models

        return await db.vehicle.findAll({
            order: [['brand', 'ASC']]
        })
    }
    catch(err) {
        throw err
    }
}