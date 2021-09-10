const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.home);

router.get('/home', mainController.home);

router.get('/login', mainController.login);

router.get('/carrito', mainController.carrito);

router.get('/profile',mainController.profile)

router.get('/userEdit', mainController.carrito);

module.exports = router;