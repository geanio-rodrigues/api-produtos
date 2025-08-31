const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

app.use(express.json());

const productRoutes = require('./modules/products/product.routes');
const supplierRoutes = require('./modules/suppliers/supplier.routes');
const userRoutes = require('./modules/auth/user.routes');

// Docs (Swagger Ui)
const openapiPath = path.join(__dirname, 'openapi.json');
const openapiDoc = JSON.parse(fs.readFileSync(openapiPath, 'utf-8'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openapiDoc));

// API routes
app.use('/api', productRoutes);
app.use('/api', supplierRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor executando em http://localhost:${PORT}`);
})