const validarJWT = require("../middlewares/validarJWT");
const validarCampos = require("../middlewares/validarCampos");
const validarRoles = require("../middlewares/validarRoles");

module.exports = {
    ...validarJWT,
    ...validarRoles,
    ...validarCampos
}