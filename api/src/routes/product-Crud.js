const { Router } = require('express');
const { Product, Category, SubCategory, Grape } = require('../db')
const router = Router();

//Add a product to the database
router.post('/', async (req, res) => {  
   let { name, description, price, year, rating, picture, category, subcategory, grape} = req.body;
   let errmsg = {};
   
   if (!name) {
      errmsg.name='Name is required'
   } else {
      if (!description) {
         errmsg.desc='Description is required'
      } else {
         if (isNaN(year)) {
            errmsg.year='Year is not a number'
         } 
      }
   }

   try{
      //Find Category
      var categoryWine = await Category.findOne({
         where: {name: category} 
      }) 
      if (categoryWine === null) {
         errmsg.cat='Invalid Category'
      }
      if (category === 'wines') {
         // Find SubCategory
         var subCategoryWine = await SubCategory.findOne({
            where: {type: subcategory}
         })
         if (subCategoryWine === null) {
            errmsg.subcat='Invalid SubCategory' 
         }
         // Find Grape
         var grapes = await Grape.findOne({
             where: {name: grape}
         })
         if (grapes === null) {
            errmsg.grape='Invalid Grape' 
         }
      }
      if (Object.keys(errmsg).length) {
         return res.status(400).send(errmsg) 
      }
      const newproduct = await Product.create({
       name,
       description,
       price,
       year,
       rating, 
       picture
     })      
    
    await categoryWine.addProduct(newproduct)
    if (category === 'wines') {
       await subCategoryWine.addProduct(newproduct)
       await grapes.addProduct(newproduct)
    }   
   } catch (error) {
      res.send(`Error in route /product ${error}`);
   }
   res.status(201).send(`A new ${category.substr(0, category.length-1)} has been added`)
 });

//Delete a product
router.delete('/:id', async (req, res) => {
   const { id } = req.params;
   try {
    const elem = await Product.destroy({
       where: {id: id}
    });
   } catch (error) {
       res.send(`Error in route.delete /product/:id ${error}`);
   }
   res.send('Product has been deleted');
 });  

 module.exports = router;