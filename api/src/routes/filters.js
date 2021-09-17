const { Router } = require('express');

const { grape } = require('../db')
const { SubCategory } = require('../db')

const router = Router();

//Con esta pequeña funcion, seteo las primeras letras de los string a mayusculas
const firstUpperCase = function (mayus) { return mayus.replace(/\b\w/g, l => l.toUpperCase()) }

router.get('/subc', async (req, res) => {
    let { type } = req.query
    if (type) {
        type = type.toLowerCase()
        const subCategoria = await SubCategory.findAll({
            where: { type }
        })
        return (subCategoria) ? res.json(subCategoria)
            : res.status(404).json(`La subcategoria ${type} es inexistente en este ecomerce\nComuniquese con la gente del backend`)
    }
    const allsubcategorias = await SubCategory.findAll()
    res.json(allsubcategorias)

})

router.get('/grape', async (req, res) => {
console.log("esto es lo que hay en db grape:", grape)
    let { name } = req.query
    if (name) {
        name = firstUpperCase(name)
        const uva = await grape.findAll({
            where: { name }
        })
        return (uva) ? res.json(uva)
            : res.status(404).json(`No tenemos existencias en nuestro catalogo del tipo de uva que estas buscando`)
    }
    const alluvas = await grape.findAll()
    res.json(alluvas)
})

router.get('/products', async (req, res) => {
res.json(`esperese mijito que esta ruta aun no funciona`)
})



module.exports = router;