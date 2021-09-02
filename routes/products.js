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

router.get('/', productsController.products);

router.get("/create", productsController.create)

router.post("/create", upload.single("img"),productsController.store);



module.exports = router