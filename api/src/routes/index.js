const { Router } = require('express');
const router = Router();

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const subCategoriesRouter = require('./subCategories')
const categoriesRouter = require('./categories');
const productRouter = require('./product-Crud');
const grapeRouter = require('./grapes');
<<<<<<< HEAD
const login = require('./user.js')
const authRouter = require('./auth.js');
=======
const reviewRouter = require('./reviews')

>>>>>>> 52837c3c15c33f156a7a1e68e981208527bfe373

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/categories', categoriesRouter);
router.use('/subcategories', subCategoriesRouter);
router.use('/product', productRouter);
router.use('/grapes', grapeRouter);
<<<<<<< HEAD
router.use('/', login)
router.use('/auth', authRouter);
=======
router.use('/reviews', reviewRouter);
>>>>>>> 52837c3c15c33f156a7a1e68e981208527bfe373

module.exports = router;

