const { Router } = require('express');
const { Grape } = require('../db')
const { Product } = require('../db')
const router = Router();

try {
  router.get('/', async(req, res) => {
    const grapesDB = await Grape.findAll()
    res.json(grapesDB)
  })
} catch (error) {
  console.log(error)
  res.status(404).json
}


module.exports = router;