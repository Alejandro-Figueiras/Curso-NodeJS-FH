const express = require('express')
const cors = require('cors')

module.exports = class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        this.middlewares()
        this.routes();
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath, require("../routes/usuarios"))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening at ${this.port}`)
        })
    }

}