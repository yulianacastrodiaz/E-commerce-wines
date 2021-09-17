var express = require('express');
const {Categorie, Product, SubCategory, Grape, conn} = require('../db');
var router = express.Router();

//Add a product to the database
router.post('/', async (req, res) => {  
   let { name, description, reldate, rating, picture, category, subcategory, grape} = req.body;
 
   const addProduct = await Videogame.create({
      name,
      description,
      reldate,
      rating, 
      platform
   })

  //Add Relation Product-Category       
  const prod_cat = await Genre.findAll({
      where:{name : category}
  })
  //Generate association link
  addProduct.setCategory(prod_cat)

  //Add Relation Product-SubCategory       
  const prod_subcat = await SubCategory.findAll({
   where:{type : subcategory}
  })
  //Generate association link
  addProduct.setSubCategory(prod_subcat)

  //Add Relation Product-Grape       
  const prod_grape = await Grape.findAll({
    where:{name : grape}
  })
  //Generate association link
  addProduct.setgrape(prod_grepe)

  res.send('Product has been added')
 });

 //Delete a product
router.post('/delete/:name', async (req, res) => {
   const { name } = req.params;
   console.log('Delete de: ', name)
   try {
    const elem = await Product.destroy({
       where: {name: `${name}`}
    });
   } catch (error) {
       res.send(`Error in route /videogames/delete ${error}`);
   }
   res.send('Videogame has been deleted');
 });  