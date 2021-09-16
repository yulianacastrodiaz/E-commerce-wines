const { Router } = require('express');
const { Categorie } = require('../db')

const router = Router();

router.get('/',(req, res) => {
  res.json("soy la ruta get")
});

router.post('/', async(req, res) => {
  const {name} = req.body;
  try {
    if(name){
      const newCategorie = await Categorie.create({
        name
      })
      res.json(newCategorie)
    }
  } catch (error) {
    console.log(error);
    res.status(404).json(error)
  }
});

module.exports = router;