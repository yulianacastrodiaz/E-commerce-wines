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
      var categoryProd = await Category.findOne({
         where: {name: category} 
      }) 
      if (categoryProd === null) {
         errmsg.cat='Invalid Category'
      }
      var subCatProd = await SubCategory.findOne({
         where: {type: subcategory}
      })
      if (subCatProd === null) {
         errmsg.subcat='Invalid SubCategory' 
      }
      if (category === 'wines') {
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
    
    await categoryProd.addProduct(newproduct)
    await subCatProd.addProduct(newproduct)
    if (category === 'wines') {
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
       where: {id: parseInt(id)}
    });
   } catch (error) {
       res.send(`Error in route.delete /product/:id ${error}`);
   }
   res.send('Product has been deleted');
 });  

//Update a product
router.put('/:id', async (req,res) => {
   const { id } = req.params;
   let { name, description, price, year, picture, category, subcategory, grape} = req.body;
 //  action.payload === 'All' ? hago en tru : hago en false
   try {
      let Prod = await Product.findOne({
         where: {id: parseInt(id)}
      })
      if (Prod.name) { 
         let changes = [];
         if (name)  { 
            Prod.name = name;
            changes.push('name')
         };
         if (description) {
            Prod.description = description;
            changes.push('description')
         }
         if (price) {
            Prod.price = price;
            changes.push('price')
         }   
         if (year) {
            Prod.year = year;
            changes.push('year')
         }   
         await Prod.save(changes);
      }   
      //Update Category
      if (category) {
         let catProd = await Category.findOne({
            where: {name: category} 
         }) 
         if (catProd === null) {
            res.send('Error in route.Put /product/:id Category not found.');
         }
         await catProd.addProduct(Prod)
      }
      //Update SubCategory
      if (subcategory) {
         let subCatProd = await SubCategory.findOne({
            where: {type: subcategory} 
         }) 
         if (subCatProd === null) {
            res.send('Error in route.Put /product/:id SubCategory not found.');
         }
         await subCatProd.addProduct(Prod)
      }
      //Update Grape
      if (grape) {
         let grapeProd = await Grape.findOne({
            where: {name: grape} 
         }) 
         if (grapeProd === null) {
            res.send('Error in route.Put /product/:id Grape not found.');
         }
         await grapeProd.addProduct(Prod)
      }
      
      res.send('Product has been updated.');
    } catch (error) {
      res.send(`Error in route.put /product/:id ${error}`);
    }
});

module.exports = router;
