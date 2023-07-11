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

const modificarUsuario = async(req = request, res = response) => {
    // /api/usuarios/_id_
    const id = req.params.id;
    const {_id, password, google, correo, ...resto } = req.body;
    
    // TODO validar contra la DB
    if (password) {
        // Encriptar password
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt)
        resto.password = passwordHash;
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto)

    res.json(usuario)
    
}

const obtenerUsuarios = async(req = request, res = response) => {
    const { limite = 10, from = 0 } = req.query;

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments({ estado: true }),
        Usuario.find({estado: true})
            .skip(Number(from))
            .limit(Number(limite))
    ])
    res.json({
        total,
        usuarios
    })
}

const borrarUsuario = async(req = request, res = response) => {
    const { id } = req.params;

    // Fisicamente
    // const usuario = await Usuario.findByIdAndDelete(id)

    // Cambio de estado
    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false})
    
    res.json(usuario)
}

module.exports = {
    obtenerUsuarios,
    nuevoUsuario,
    modificarUsuario,
    borrarUsuario
}