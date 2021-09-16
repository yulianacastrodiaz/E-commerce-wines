const { SubCategory } = require('../db')

function preloadSubCategories(){
  const subCategories = [{
    type: "red"
  },{
    type: "pink"
  },{
    type: "white"
  }]

  try {
    const newSubCategories = subCategories.map(async(s) => {
      await SubCategory.create({
        type: s.type
      })
    })

    Promise.all(newSubCategories)
      .then(() => {
        return console.log("precarga de subCategorias: done :)")
      })
  } catch (error) {
    return console.log(error)
  }
}

module.exports = preloadSubCategories;