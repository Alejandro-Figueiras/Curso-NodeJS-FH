const express = require('express')
const cors = require('cors');
const { dbConection } = require('../database/config.db');

module.exports = class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        // Base de datos
        this.conectarDB()

        this.middlewares()
        this.routes();
    }

    async conectarDB() {
        await dbConection();
    }

    middlewares() {
        this.app.use(cors())

        // Lectura y parseo del body
        this.app.use(express.json())

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