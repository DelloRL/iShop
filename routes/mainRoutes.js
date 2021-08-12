const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.home);

router.get('/home', mainController.home);

router.get('/login', mainController.login);

router.get('/upload', mainController.upload);

router.get('/detalle', mainController.detalle);

router.get('/carrito', mainController.carrito);

router.get('/iphones', mainController.iphones);

router.get('/fundas', mainController.fundas);

router.get('/auriculares', mainController.auriculares);

module.exports = router;