const { response, request } = require('express')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuario')

const validarJWT = async(req = request, res = response, next) => {
    const token = req.header('x-token')
    if (!token) {
        res.status(401).json({err: 'no token'})
    }

    try {
        const {uid} = jwt.verify(token, process.env.JWT_KEY)

        const usuario = await Usuario.findById(uid);
        // verificar si el usuario no ha sido borrado
        if (!usuario || !usuario.estado)
            return res.status(401).json({msg: 'Token no valido'})
        req.usuario = usuario;
        req.uid = uid;
        next();
    } catch(err) {
        console.log(err)
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
}

module.exports = {
    validarJWT
}