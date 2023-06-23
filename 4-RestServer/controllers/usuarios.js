const { response } = require("express")

const usuariosGet = (req, res = response) => {
    res.json({
        msg: "get api"
    })
}

const usuariosPost = (req, res) => {
    res.json({
        msg: "post api"
    })
}

const usuariosPut = (req, res) => {
    res.json({
        msg: "put api"
    })
}

const usuariosPatch = (req, res) => {
    res.json({
        msg: "patch api"
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: "delete api"
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}