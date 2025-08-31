const dataSuppliers = require('../../config/data.suppliers');
let idSupplier = 4; // para simular o autoincremento no id quando criar um Fornecedor novo.

const getAllSuppliers = () => {
    return dataSuppliers;
}

const getSupplierById = (id) => {
    const supplier = dataSuppliers.find((prod) => prod.id === id);
    if(!supplier) {
        console.log(`Fornecedor não encontrado!`);
        return;
    }
    return supplier;
}

const createSupplier = (name, email, phone, notes) => {
    dataSuppliers.push({
        id: ++idSupplier,
        name,
        email, 
        phone,
        notes
    });
    return true;
}

const updateSupplier = (id, name, email, phone, notes) => {
    const supplierFound = dataSuppliers.find((prod) => prod.id === id);
    if(!supplierFound) {
        console.log(`Fornecedor não encontrado!`);
        return;
    }
    supplierFound.name = name || supplierFound.name;
    supplierFound.email = email || supplierFound.email;
    supplierFound.phone = phone || supplierFound.phone;
    supplierFound.notes = notes || supplierFound.notes;
}

const deleteSupplier = (id) => {
    const indexsupplier = dataSuppliers.findIndex((prod) => prod.id === id);
    if(indexsupplier === -1){
        console.log(`Fornecedor não encontrado!`);
        return;
    }
    dataSuppliers.splice(indexsupplier, 1);
}


module.exports = {
    getAllSuppliers,
    getSupplierById,
    createSupplier,
    updateSupplier,
    deleteSupplier
}
