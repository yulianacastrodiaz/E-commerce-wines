const { Router } = require('express');
const { Category } = require('../db')
const { SubCategory } = require('../db')
const router = Router();

router.get('/', async(req, res) => {
  const { name } = req.query
  try {
    if (name) {
      const categorie = await Category.findOne({ where: { name }, include: SubCategory })
      if (categorie) {
        res.json(categorie)
      } else {
        res.status(404).json({msg: `No se encontró la categoria ${name}`})
      }
    } else {
      const allCategories = await Category.findAll({include: SubCategory});
      res.json(allCategories)
    }
  } catch (error) {
    res.status(404).json(error)
  }
});

router.post('/', async (req, res) => {
  const { name } = req.body;
  try {
    if (name) {
      const newCategory = await Category.create({
        name
      })
      res.json(newCategory)
    }
  } catch (error) {
    console.log(error);
    res.status(404).json(error)
  }
});

module.exports = router;