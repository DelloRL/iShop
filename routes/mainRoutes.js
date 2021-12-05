const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware')

const mainController = require('../controllers/mainController');

router.get('/', mainController.home);

router.get('/home', mainController.home);

router.get('/cart', authMiddleware ,mainController.carrito);

router.get('/contact', mainController.contact);

module.exports = router;