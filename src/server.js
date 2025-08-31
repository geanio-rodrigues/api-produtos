const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const productRoutes = require('./modules/products/product.routes');
const supplierRoutes = require('./modules/suppliers/supplier.routes');

app.use('/api', productRoutes);
app.use('/api', supplierRoutes);

app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
})