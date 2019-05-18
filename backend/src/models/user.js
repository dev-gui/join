'use strict'

module.exports = (sequelize, DataType) => {

    const user = sequelize.define('user', {
        user_id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataType.STRING,
            allowNull: false
        },
        last_name: {
            type: DataType.STRING,
            allowNull: false
        },
        cpf: {
            type: DataType.BIGINT,
            allowNull: false
        }
    }, {
        timestamps: false
    })

    user.associate = models => {
        user.hasMany(models.rent, { foreignKey: 'user_id' })
    }
        
    return user

}