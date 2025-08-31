const productServices = require('./product.services');

// usando função async por manter boas práticas, para array não seria necessário, mas com banco de dados sim
const getAllProductsController = async (req, res) => {
    try {
        const products = await productServices.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: `Server Internal Error!` });
    }
}

const getProductByIdController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const product = await productServices.getProductById(id);
        (product) ? res.status(200).json(product) : res.status(404).json({ message: `Product Not Found` });
    } catch (error) {
        res.status(500).json({ message: `Server Internal Error!` });
    }
}

const createProductController = async (req, res) => {
    try {
        const { name, category, brand, quantity, purchase_price, supplier_id, notes } = req.body;
        await productServices.createProduct(name, category, brand, quantity, purchase_price, supplier_id, notes);
        res.status(200).json({ message: `Product created with Success!` });
    } catch (error) {
        res.status(500).json({ message: `Server Internal Error!` });
    }
}

const updateProductController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, category, brand, quantity, purchase_price, supplier_id, notes } = req.body;
        await productServices.updateProduct(id, name, category, brand, quantity, purchase_price, supplier_id, notes);
        res.status(200).json({ message: `Product updatade with Success!` });
    } catch (error) {
        res.status(500).json({ message: `Server Internal Error!` });
    }
}

const deleteProductController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await productServices.deleteProduct(id);
        res.status(200).json({ message: `Product deleted with Success!` });
    } catch (error) {
        res.status(500).json({ message: `Server Internal Error!` });
    }
}

module.exports = {
    getAllProductsController,
    getProductByIdController,
    createProductController,
    updateProductController, 
    deleteProductController
}