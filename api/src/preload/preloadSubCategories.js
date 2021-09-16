const { SubCategorie } = require('../db')

function preloadSubCategorie(){
  const subCategories = [{
    type: "red"
  },{
    type: "pink"
  },{
    type: "white"
  }]

  try {
    const newSubCategories = subCategories.map(async(s) => {
      await SubCategorie.create({
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

module.exports = preloadSubCategorie;