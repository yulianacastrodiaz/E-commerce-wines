const { Category } = require('../db')

function preloadCategories(){
  const categories = [{
    name: "wines"
  },{
    name: "beers"
  },{
    name: "whisky"
  }]

  try {
    const newCategories = categories.map(async(c) => {
      await Category.create({
        name: c.name
      })
    })
  
    Promise.all(newCategories)
      .then(() =>{
        return console.log("precarga de categorias: done :)")
      })
  } catch (error) {
    return console.log(error)
  }
}

module.exports = preloadCategories;