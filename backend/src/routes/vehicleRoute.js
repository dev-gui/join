'use strict'

module.exports = app => {
    const controller = app.src.controller.vehicleController

    app.route('/vehicle')
        .post(controller.createVehicle)
        .get(controller.getAllVehicle)

    app.route('/vehicle/:vehicleId')
        .put(controller.updateVehicle)
        .delete(controller.removeVehicle)
        .get(controller.getOneVehicle)
}