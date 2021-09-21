const { Router } = require('express');
const { Review } = require('../db');
const { Product } = require('../db');

const router = Router();

try {
  router.get('/:id', async(req, res) => {
    const { id } = req.params
    const product = await Product.findOne({ where: { id }, include: Review })
    if(product.dataValues.reviews.length > 0){
      res.json(product)
    } else {
      res.status(404).json({ msg: "El prodcuto no tiene reviews" })
    }
  })
} catch (error) {
  console.log(error)
  res.status(404).json(error)
}

module.exports = router;