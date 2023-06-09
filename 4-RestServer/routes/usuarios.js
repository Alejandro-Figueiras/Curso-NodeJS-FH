const { Router } = require("express");
const { nuevoUsuario, obtenerUsuarios, modificarUsuario, borrarUsuario } = require("../controllers/usuarios");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validarCampos");
const { isRolValido, emailExiste, usuarioExiste } = require("../helpers/dbValidators");

const router = Router();

router.post('/new', [
    // Middlewares
    // funciones de express-validator
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y de mas de 6 letras').isLength({min: 6}),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    check('rol').custom(isRolValido),
    validarCampos
], nuevoUsuario)
router.put('/:id', [
    check('id', "No es un id valido").isMongoId(),
    check('id').custom(usuarioExiste),
    check('rol').custom(isRolValido),
    validarCampos
], modificarUsuario)
router.get('/', obtenerUsuarios)
router.delete('/:id', [
    check('id', "No es un id valido").isMongoId(),
    check('id').custom(usuarioExiste),
    validarCampos
], borrarUsuario)

module.exports = router;