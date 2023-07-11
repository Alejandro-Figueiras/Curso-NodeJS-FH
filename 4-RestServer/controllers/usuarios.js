const { request, response } = require("express")
const bcrypt = require('bcryptjs');
const Usuario = require("../models/usuario")

const nuevoUsuario = async(req = request, res = response) => {
    const { nombre, correo, password, rol } = req.body;

    // Encriptar password
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt)

    const usuario = new Usuario({nombre, correo, password: passwordHash, rol});

    await usuario.save();
    res.json({
        msg: "Usuario agregado correctamente",
        ...(usuario.toJSON())
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
    nuevoUsuario,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}