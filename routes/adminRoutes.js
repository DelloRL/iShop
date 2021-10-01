const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const controllersAdmin = require(path.resolve(__dirname,'../controllers/adminController.js'));
const adminMiddleware = require('../middlewares/adminMiddleware')
// const acceso = require(path.resolve(__dirname,'../middlewares/acceso'));


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/products'));
    },
    filename: function (req, file, cb) {
      cb(null, 'moto-'+Date.now()+path.extname(file.originalname))
    }
})
   
const upload = multer({ storage })

router.get('/admin', adminMiddleware, controllersAdmin.index);


module.exports = router;