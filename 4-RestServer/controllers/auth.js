const { request, response } = require("express");
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');

const login = async(req = request, res = response) => {

    const { correo, password } = req.body;

    try {
        // Email existe
        const usuario = await Usuario.findOne({correo});
        if (!usuario) {
            return res.status(400).json({
                msg: 'Usuario / Password incorrecto'
            })
        }

        // Si el usuario esta activo
        if (!usuario.estado) {
            return res.status(400).json({
                msg: 'Usuario / Password incorrecto'
            })
        }

        // Verificar password
        const validPassword = bcrypt.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Usuario / Password incorrecto'
            })
        }

        // Generar el JWT

        return res.status(200).json({});
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: 'Error interno'
        })
    }
}

module.exports = {
    login
}