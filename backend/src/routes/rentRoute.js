'use strict'

module.exports = app => {
    const controller = app.src.controller.rentController

    app.route('/rent')
        .post(controller.createRent)
        .get(controller.getAllRent)

    app.route('/rent/:rentId')
        .put(controller.updateRent)
        .get(controller.getOneRent)
}