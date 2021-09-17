const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const categoriesRouter = require('./categories')
const filtersRouter = require('./filters')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/categories', categoriesRouter);
router.use('/filter', filtersRouter);

module.exports = router;