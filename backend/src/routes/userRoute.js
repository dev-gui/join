'use strict'

module.exports = app => {
    const controller = app.src.controller.userController

    app.route('/user')
        .post(controller.createUser)
}