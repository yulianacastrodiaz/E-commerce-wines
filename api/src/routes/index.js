const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const categoriesRouter = require('./categories')
const subCategoriesRouter = require('./subCategories')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/categories', categoriesRouter);
router.use('/subcategories', subCategoriesRouter);


module.exports = router;