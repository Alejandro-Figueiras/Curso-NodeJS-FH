const { request, response } = require("express")
const Usuario = require("../models/usuario")

const usuariosPost = async(req = request, res = response) => {
    const body = req.body;
    console.log(body)
    const usuario = new Usuario(body);
    await usuario.save();
    res.json({
        msg: "post api",
        ...body
    })
}

const usuariosGet = (req = request, res = response) => {
    // /api/usuarios?param=10&apikey=10
    const query = req.query;
    res.json({
        msg: "get api",
        query
    })
}


const usuariosPut = (req = request, res = response) => {
    // /api/usuarios/_id_
    const id = req.params.id;

    res.json({
        msg: "put api",
        id
    })
}

const usuariosPatch = (req = request, res = response) => {
    res.json({
        msg: "patch api"
    })
}

const usuariosDelete = (req = request, res = response) => {
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