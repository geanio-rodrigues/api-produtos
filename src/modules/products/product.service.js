const dataProducts = require('../../config/data.products');
let idProduct = 4; // para simular o autoincremento no id quando criar um produto novo.

const getAllProducts = () => {
    return dataProducts;
}

const getProductById = (id) => {
    const product = dataProducts.find((prod) => prod.id === id);
    if(!product) {
        console.log(`Produto não encontrado!`);
        return;
    }
    return product;
}

const createProduct = (name, category, brand, quantity, purchase_price, supplier_id, notes) => {
    dataProducts.push({
        id: ++idProduct,
        name,
        category, 
        brand,
        quantity,
        purchase_price,
        supplier_id,
        notes
    });
    return true;
}

const updateProduct = (id, name, category, brand, quantity, purchase_price, supplier_id, notes) => {
    const productFound = dataProducts.find((prod) => prod.id === id);
    if(!productFound) {
        console.log(`Produto não encontrado!`);
        return;
    }
    productFound.name = name || productFound.name;
    productFound.category = category || productFound.category;
    productFound.brand = brand || productFound.brand;
    productFound.quantity = quantity || productFound.quantity;
    productFound.purchase_price = purchase_price || productFound.purchase_price;
    productFound.supplier_id = supplier_id || productFound.supplier_id;
    productFound.notes = notes || productFound.notes;
}

const deleteProduct = (id) => {
    const indexProduct = dataProducts.findIndex((prod) => prod.id === id);
    if(indexProduct === -1){
        console.log(`Produto não encontrado!`);
        return;
    }
    dataProducts.splice(indexProduct, 1);
}


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
