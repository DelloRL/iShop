const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.home);

router.get('/home', mainController.home);

router.get('/cart', mainController.carrito);

module.exports = router;