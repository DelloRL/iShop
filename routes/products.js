const express = require('express');
const multer = require("multer");
const path = require("path")
const router = express.Router();

const productsController = require('../controllers/productsController');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, `${date.now()}_img_${path.extname(file.orginlname)}`)
    }
});
const upload = multer({storage})

router.post("/upload", upload.single("img-product"),productsController.store);

router.get("/upload", productsController.create)

router.get('/products', productsController.products);

module.exports = router