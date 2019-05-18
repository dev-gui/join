'use strict'

module.exports = (sequelize, DataType) => {

    const vehicle = sequelize.define('vehicle', {
        vehicle_id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            primaryKey: true,
        },
        brand: {
            type: DataType.STRING,
            allowNull: false
        },
        model: {
            type: DataType.STRING,
            allowNull: false
        },
        plate: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    })

    vehicle.associate = models => {
        vehicle.hasMany(models.rent, { foreignKey: 'vehicle_id' })
    }
        
    return vehicle

}