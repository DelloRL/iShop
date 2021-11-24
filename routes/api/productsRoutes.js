const express = require('express');
const router = express.Router();

const apiProductsControllers = require('../../controllers/api/productsController.js');

router.get('/products', apiProductsControllers.list);

// router.get('/:id', apiProductsControllers.detail);

module.exports = router;