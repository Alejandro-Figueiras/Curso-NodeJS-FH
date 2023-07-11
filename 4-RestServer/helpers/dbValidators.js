const Role = require("../models/role");
const Usuario = require("../models/usuario")

const isRolValido = async(rol = '' ) => {
    const existeRol = await Role.findOne({rol})
    if (!existeRol) {
        throw new Error(`El rol "${rol}" no está registrado en la base de datos`)
    }
}

const emailExiste = async(correo) => {
    const existe = await Usuario.findOne( {correo} )
    if (existe) {
        throw new Error(`El correo '${correo}' ya esta registrado`)
    }
}

module.exports = {
    isRolValido, 
    emailExiste
}