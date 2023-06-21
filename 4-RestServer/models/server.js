const express = require('express')

module.exports = class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT;

        this.middlewares()
        this.routes();
    }

    middlewares() {
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                msg: "Hola wenas"
            })
        })
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening at ${this.port}`)
        })
    }

}