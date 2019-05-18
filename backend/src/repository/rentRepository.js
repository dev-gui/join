'use strict'

exports.createRent = async req => {
    try {
        const db = req.app.src.config.db.models
        const op = req.app.src.config.db.Sequelize.Op
        
        // Cria a locacao se o veiculo nao estiver alugado no momento
        return await db.rent.findOrCreate({
            where: {
                vehicle_id: req.body.vehicle_id,
                contract_end: {
                    [op.gte]: new Date()
                }
            },
            defaults: {...req.body}
        })
        .then(([rent, created]) => {
            if(created) return true
            else return false
        })
    }
    catch(err) {
        throw err
    }
}

exports.updateRent = async req => {
    try {
        const db = req.app.src.config.db.models
        
        return await db.rent.update(req.body, {
            where: {
                rent_id: req.params.rentId
            }
        })
    }
    catch(err) {
        throw err
    }
}

exports.getAllRent = async req => {
    try {
        const db = req.app.src.config.db.models
        
        return await db.rent.findAll({
            order: [['contract_start', 'DESC']]
        })
    }
    catch(err) {
        throw err
    }
}

exports.getOneRent = async req => {
    try {
        const db = req.app.src.config.db.models
        
        return await db.rent.findOne({
            where: {
                rent_id: req.params.rentId
            }
        })
    }
    catch(err) {
        throw err
    }
}

// metodo chamado no repositorio do veiculo
// Metodo usado apenas para verificar se existe alguma locacao ativa com o veiculo.
exports.getOneToRemoveVehicle = async req => {
    try {
        const db = req.app.src.config.db.models
        const op = req.app.src.config.db.Sequelize.Op
        
        return await db.rent.findOne({
            where: {
                vehicle_id: req.params.vehicleId,
                contract_end: {
                    [op.gte]: new Date()
                }
            }
        })
    }
    catch(err) {
        throw err
    }
}

