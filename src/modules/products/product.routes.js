const productControllers = require('./product.controllers');
const express = require('express');

const router = express.Router();

router.get('/products', productControllers.getAllProductsController);
router.get('/products/:id', productControllers.getProductByIdController);
router.post('/products', productControllers.createProductController);
router.put('/products/:id', productControllers.updateProductController);
router.delete('/products/:id', productControllers.deleteProductController);

module.exports = router;