const { request, response } = require("express");

const validarRol = (...roles) => {
    return (req = request, res = response, next) => {
        if (!req.usuario) {
            return res.status(500).json({
                msg: "Se intenta validar el rol sin tener el usuario objetivo"
            })
        }
        
        if (!roles.includes(req.usuario.rol)){
            res.status(401).json({msg: 'Unauthorized'})
        }
        next();
    }
}

module.exports = {validarRol}