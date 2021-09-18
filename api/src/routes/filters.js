const { json } = require('body-parser');
const { Router } = require('express');

const { Grape, Product, SubCategory } = require('../db')


const router = Router();

//Con esta pequeña funcion, seteo las primeras letras de los string a mayusculas
const firstUpperCase = function (mayus) { return mayus.replace(/\b\w/g, l => l.toUpperCase()) }

//filtro por subcategoria de vinos (red, white & pink)
router.get('/subcategory', async (req, res) => {

    try {
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
    }
    catch (error) { res.status(404).json(error) }

})


//filtro por tipo de uvas ( hay seteadas 7)
router.get('/grape', async (req, res) => {
    try {
        let { name } = req.query
        if (name) {
            name = firstUpperCase(name.toLowerCase())
            const uva = await Grape.findAll({
                where: { name }
            })
            return (uva) ? res.json(uva)
                : res.status(404).json(`No tenemos existencias en nuestro catalogo del tipo de uva que estas buscando`)
        }
        const alluvas = await Grape.findAll()
        res.json(alluvas)
    }
    catch (error) { res.status(404).json(error) }
})


router.get('/product', async (req,res)=>{
    try {
        let prod = await Product.findAll()
        res.json(prod)
    }
    catch (error) {res.status(404).json(error)}
})


//falta terminar aún
router.get('/', async (req, res) => {
    try {
        let prod = await Product.findAll()

        // FILTROS GENERICOS
        //devuelve coincidencias aproximadas por nombre
        let { name } = req.query
        //devuelve por coincidencia exacta de id
        let { id } = req.query
        //devuelve por coincidencia exacta de precio
        let { price } = req.query
        //devuelve coincidencia exacta de año 
        let { year } = req.query
        //devuelve ordenados por el raiting especifico de cada producto
        let { rating } = req.query
        //════════════════════════════════════════════════════════════════════════════
        //FILTROS ESPECIFICOS
        //devuelve ordenado por az
        let { az } = req.query
        //devuelve ordenado por za
        let { za } = req.query
        //devuelve ordenados desde el mas costoso al mas barato
        let { expensive } = req.query
        //devuelve ordenados desde el mas economico al mas costoso
        let { cheap } = req.query
        //devuelve ordenados por el más nuevo primero (años cercanos) 
        let { neu } = req.query
        //devuelve ordenados por el más antiguo primero (años lejanos) 
        let { old } = req.query
        // se le pasa un precio y devuelve los de ese precio y $100 hacia arriba y hacia abajo
        let { rank } = req.query

        if (name) {
            name = firstUpperCase(name.toLowerCase())
            const nombre = await prod.filter(p => p.name.includes(name))
            return (nombre.length > 0) ? res.json(nombre)
                : res.status(404).json(`En nuestro catalogo no existen productos que coincidan con el termnino ${nombre}`)
        }

        if (id) {
            id = parseInt(id)
            if (typeof id !== "number") { return res.status(404).json(`El id ${id} ingresado, no es del tipo numerico`) }
            let byId = await prod.filter(p => p.id === id)
            return (byId.length > 0) ? res.json(byId)
                : res.status(404).json(`No tenemos existencia de un producto con ${id} como id`)
        }

        if (price) {
            price = parseInt(price)
            if (typeof price !== "number") { return res.status(404).json(`El precio ${price} ingresado, no es del tipo numerico`) }
            let byPrice = await prod.filter(p => p.price == price)
            return (byPrice.length > 0) ? res.json(byPrice)
                : res.status(404).json(`No encontramos coincidencia exacta de un producto con el precio ${price}`)
        }

        if (year) {
            year = parseInt(year)
            if (typeof year !== "number") { return res.status(404).json(`El año ${year} ingresado no es del tipo numerico`) }
            let byYear = await prod.filter(p => p.year === year)
            return (byYear.length > 0) ? res.json(byYear)
                : res.status(404).json(`No encontramos coincidencia exacta de un producto con el año ${year}`)
        }

        if (rating) {
            rating = parseInt(rating)
            if (typeof rating !== "number") { return res.status(404).json(`El rating ${rating} ingresado no es del tipo numerico`) }
            let byRating = await prod.filter(p => p.rating === rating)
            return (byRating.length > 0) ? res.json(byRating)
                : res.status(404).json(`No encontramos coincidencia exacta de un producto con el rating ${rating}`)
        }

        res.status(404).json(`Esta es una ruta especifica de filtros \n por favor envie un key valido para obtner los filtrados \n si los desconoce, pongase en contacto con el equipo de Backend`)
    }
    catch (error) { res.status(404).json(error) }

})


module.exports = router;