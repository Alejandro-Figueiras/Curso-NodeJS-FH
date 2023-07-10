const { Router } = require("express");
const { usuariosGet, nuevoUsuario, usuariosPut, usuariosPatch, usuariosDelete } = require("../controllers/usuarios");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validarCampos");

const router = Router();

router.post('/new', [
    // Middlewares
    // funciones de express-validator
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y de mas de 6 letras').isLength({min: 6}),
    check('correo', 'El correo no es valido').isEmail(),
    check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
], nuevoUsuario)
router.get('/', usuariosGet)
router.put('/', usuariosPut)
router.patch('/', usuariosPatch)
router.delete('/', usuariosDelete)

module.exports = router;