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


router.get('/product', async (req, res) => {
    try {
        let prod = await Product.findAll()
        res.json(prod)
    }
    catch (error) { res.status(404).json(error) }
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
        //Para utilizar estos filtros se usan query, se usa el key y las opciones de value
        //especificadas en cada caso

        //devuelve ordenado por az o za 
        let { az } = req.query

        //devuelve ordenados  por precio
        //expensive = desde el mas costoso al mas barato
        //cheap = el mas economico al mas costoso
        let { money } = req.query

        //devuelve ordenadoas por año
        //new = más  recientes primeros
        //old = más antiguos primeros
        let { age } = req.query


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

        if (az) {
            az = az.toLowerCase();
            if (az === "az") {
                let azName = await prod.sort(function (n1, n2) {
                    return (n1.name > n2.name) ? 1
                        : (n2.name > n1.name) ? -1
                            : 0
                })
                return res.json(azName)
            }
            if (az === "za") {
                let zaName = await prod.sort(function (n1, n2) {
                    return (n1.name > n2.name) ? -1
                        : (n2.name > n1.name) ? 1
                            : 0
                })
                return res.json(zaName)
            }

            return res.status(404).json(`El value ${az} no esta seteado, revisalo e intenta nuevamente
            o dirijete a api/src/routes/filters.js linea 133 para mas detalles
            o contacta con el grupo de backend`)
        }

        if (money) {
            money = money.toLowerCase();
            if (money === "expensive") {
                let expensive = await prod.sort(function (p1, p2) {
                    return p2.price - p1.price
                })
                return res.json(expensive)
            }
            if (money === "cheap") {
                let cheap = await prod.sort(function (p1, p2) {
                    return p1.price - p2.price
                })
                return res.json(cheap)
            }

            return res.status(404).json(`El value ${money} no esta seteado, revisalo e intenta nuevamente
            o dirijete a api/src/routes/filters.js linea 162 para mas detalles
            o contacta con el grupo de backend`)
        }

        if(age){
            age = age.toLowerCase();
            if(age === "new"){
                let nuevo = await prod.sort(function (e1, e2){
                    return e2.year - e1.year 
                })
                return res.json(nuevo)
            }
            if(age === "old"){
                let viejo = await prod.sort(function (e1, e2){
                    return e1.year - e2.year
                })
                return res.json(viejo)
            }
            return res.status(404).json(`El value ${age} no esta seteado, revisalo e intenta nuevamente
            o dirijete a api/src/routes/filters.js linea 183 para mas detalles
            o contacta con el grupo de backend`)

        }

        res.status(404).json(`Esta es una ruta especifica de filtros \n por favor envie un key valido para obtner los filtrados \n si los desconoce, pongase en contacto con el equipo de Backend`)
    }
    catch (error) { res.status(404).json(error) }

})


module.exports = router;