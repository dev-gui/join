'use strict'

module.exports = (sequelize, DataType) => {

    const rent = sequelize.define('rent', {
        rent_id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            primaryKey: true,
        },
        contract_start: {
            type: DataType.DATE,
            allowNull: false
        },
        contract_end: {
            type: DataType.DATE,
            allowNull: false
        }
    }, {
        timestamps: false
    })

    rent.associate = models => {
        rent.belongsTo(models.user, { foreignKey: 'user_id' })
        rent.belongsTo(models.vehicle, { foreignKey: 'vehicle_id' })
    }
        
    return rent

}