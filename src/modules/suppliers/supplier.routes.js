const supplierControllers = require('./suppplier.controller');
const express = require('express');

const router = express.Router();

router.get('/supplier', supplierControllers.getAllSuppliersController);
router.get('/supplier/:id', supplierControllers.getSupplierByIdController);
router.post('/supplier', supplierControllers.createSupplierController);
router.put('/supplier/:id', supplierControllers.updateSupplierController);
router.delete('/supplier/:id', supplierControllers.deleteSupplierController);

module.exports = router;