const { Product } = require('../db')

function preloadProducts(){
  const products = [{
    name: "Cafayate",
    descripcion: "vino de Salta de uvas torrontes",
    brand:"",
    price: 450,
    year:2020,
    rating:4,
    stock:10,
    picture:"url..."
  },{
    name: "Chivas 12",
    descripcion: "whisky añejado por 12 años",
    brand:"Chivas",
    price:3.000,
    year:0,
    rating:5,
    stock:10,
    picture:"url..."
  },{
    name: "Saint Felicien",
    descripcion: " vino de Medoza de uvas malbec",
    brand:"",
    price:600,
    year:2019,
    rating:2,
    stock:10,
    picture:"url..."
  }]

  try {
    const newProducts = products.map(async(p) => {
      return await Product.create({
        name: p.name,
        descripcion: p.descripcion,
        brand:p.brand,
        price: p.price,
        year: p.year,
        rating: p.rating,
        stock:p.stock,
        picture: p.picture
      })
    })
  
   return Promise.all(newProducts)
  } catch (error) {
    return console.log(error)
  }
}


module.exports = preloadProducts;