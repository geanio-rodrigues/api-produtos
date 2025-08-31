const supplierControllers = require('./suppplier.controllers');
const express = require('express');

const router = express.Router();

router.get('/suppliers', supplierControllers.getAllSuppliersController);
router.get('/suppliers/:id', supplierControllers.getSupplierByIdController);
router.post('/suppliers', supplierControllers.createSupplierController);
router.put('/suppliers/:id', supplierControllers.updateSupplierController);
router.delete('/suppliers/:id', supplierControllers.deleteSupplierController);

module.exports = router;