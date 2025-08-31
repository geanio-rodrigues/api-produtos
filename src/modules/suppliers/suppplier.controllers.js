const supplierServices = require('./supplier.services');

// usando função async por manter boas práticas, para array não seria necessário, mas com banco de dados sim
const getAllSuppliersController = async (req, res) => {
    try {
        const suppliers = await supplierServices.getAllSuppliers();
        res.status(200).json(suppliers);
    } catch (error) {
        res.status(500).json({ message: `Server Internal Error!` });
    }
}

const getSupplierByIdController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const supplier = await supplierServices.getSupplierById(id);
        (supplier) ? res.status(200).json(supplier) : res.status(404).json({ message: `supplier Not Found` });
    } catch (error) {
        res.status(500).json({ message: `Server Internal Error!` });
    }
}

const createSupplierController = async (req, res) => {
    try {
        const { name, email, phone, notes } = req.body;
        await supplierServices.createSupplier(name, email, phone, notes);
        res.status(200).json({ message: `supplier created with Success!` });
    } catch (error) {
        res.status(500).json({ message: `Server Internal Error!` });
    }
}

const updateSupplierController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, email, phone, notes } = req.body;
        await supplierServices.updateSupplier(id, name, email, phone, notes);
        res.status(200).json({ message: `Supplier updatade with Success!` });
    } catch (error) {
        res.status(500).json({ message: `Server Internal Error!` });
    }
}

const deleteSupplierController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await supplierServices.deleteSupplier(id);
        res.status(200).json({ message: `Supplier deleted with Success!` });
    } catch (error) {
        res.status(500).json({ message: `Server Internal Error!` });
    }
}

module.exports = {
    getAllSuppliersController,
    getSupplierByIdController,
    createSupplierController,
    updateSupplierController, 
    deleteSupplierController
}