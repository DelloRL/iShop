const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/userController');
let logDBMiddleware = require('../middlewares/logDBMiddleware');


/* Validaciones */
const validateRegister = [
    body('txtNombre').notEmpty().withMessage('Debes completar el campo de nombre'),
    body('txtUsuario').notEmpty().withMessage('Debes completar el campo de usuario'),
    body('txtContrasena').notEmpty().withMessage('La contraseña no puede estar en blanco')
];


/* Todos los usuarios */
router.get('/', controller.index);

/* Formulario de creación */
router.get('/register', userController.register);

router.post('/', validateRegister, userController.store);
router.post('/register', logDBMiddleware, userController.store);

/*Detalle de un usuario*/
router.get('/:id', controller.show)

module.exports = router;