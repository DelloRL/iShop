const express = require('express');
const router = express.Router();
const multer = require("multer");
const { body } = require('express-validator');
const userController = require('../controllers/userController');
const path = require("path")

/* Validaciones */
const validations = [
    body('name').notEmpty().withMessage('Debes completar el campo de nombre'),
    body('email')
        .notEmpty().withMessage('Debes ingresar un email').bail()
        .isEmail().withMessage('Debes ingresar un correo válido'),
    body('password')
        .notEmpty().withMessage('Debes escribir una contraseña').bail()
        .isLength(6).withMessage('La contraseña debe tener un minimo de 6 caracteres')
    ,
    body('avatar').custom((value, { req }) => {
        let file = req.file
        if(!file) {
            throw new Error('Tienes que subir una imagén')
        }
        return true;
    })
];

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/users'));
    },
    filename: (req, file, callback) => {
        callback(null, 'avatar-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

/* Formulario de registro y login */
router.get('/register', userController.register);

// Validación de registro y envio del formulario

router.post('/register', upload.single('avatar'), validations , userController.processRegister);

// Formulario de login
router.get('/login', userController.login)


module.exports = router;