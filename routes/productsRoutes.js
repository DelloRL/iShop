const express = require('express');
const multer = require("multer");
const path = require("path")
const router = express.Router();
const productsController = require('../controllers/productsController');

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
router.post("/create", upload.single("img"),productsController.store);

//detalle
router.get('/:id/', productsController.detail);

//Actualizar
router.get('/edit/:id', productsController.edit);
router.post('/edit/:id', productsController.update);

//Borrar
router.delete('/:id', productsController.destroy);

module.exports = router