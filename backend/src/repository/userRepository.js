'use strict'

exports.createUser = async req => {
    try {
        const db = req.app.src.config.db.models

        // Cria o suario se nao acha-lo pelo CPF
        return await db.user.findOrCreate({
            where: {
                cpf: req.body.cpf
            },
            defaults: req.body
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