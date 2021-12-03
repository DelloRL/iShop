const express = require('express');
const multer = require("multer");
const path = require("path")
const router = express.Router();
const productsController = require('../controllers/productsController');
const { body } = require('express-validator');
const adminMiddleware = require('../middlewares/adminMiddleware');

/* Validaciones */
const validations = [
    body('name').notEmpty().withMessage('Debes completar el campo de nombre')
        .isLength(6).withMessage('El campo de Nombre debe tener al menos 6 caracteres.')
    ,
    body('price')
        .notEmpty().withMessage('Debes ingresar un Precio').bail()
    ,
    body('category')
        .notEmpty().withMessage('Debes escoger una categoría').bail()
    ,
    body('description')
        .notEmpty().withMessage('Debes escribir una descripción').bail()
        .isLength(15).withMessage('El campo Descripción debe tener al menos 15 caracteres')
    ,
    body('img').custom((value, { req }) => {
        let file = req.file
        if (!file) {
            throw new Error('Tienes que subir una imágen')
        }
        return true;
    })
];

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/products'));
    },
    filename: (req, file, callback) => {
        callback(null, 'producto-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

//Listado
router.get('/', productsController.products);

//Crear
router.get("/create", productsController.create)
router.post("/create", upload.single("img"), validations, productsController.store);

//detalle
router.get('/:id', productsController.detail);

//Actualizar
router.get('/edit/:id', adminMiddleware, productsController.edit);
router.post('/edit/:id', adminMiddleware, upload.single("img"), productsController.update);

//Borrar
router.get('/:id/delete', productsController.destroy);

//Cart
router.get('/addToCart/:id', productsController.addToCart);
router.get('/deleteToCart/:id', productsController.deleteToCart);


module.exports = router