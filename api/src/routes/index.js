const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const categoriesRouter = require('./categories')
const productRouter = require('./product-Crud')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/categories', categoriesRouter);

router.use('/product',productRouter);

module.exports = router;