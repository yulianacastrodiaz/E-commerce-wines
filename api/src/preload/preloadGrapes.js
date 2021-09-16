const { Grape } = require('../db')

function preloadGrapes(){
  const graps = [{
    name: "Cabernet Sauvignon"
  },{
    name: "Pinot Noir"
  },,{
    name: "Chardonnay"
  },{
    name: "Merlot"
  },{
    name: "Syrah"
  }]

  try {
    const newGrapes = graps.map(async(g) => {
      await Grape.create({
        name: g.name
      })
    })
  
    Promise.all(newGrapes)
      .then(() => {
        return console.log("precarga de uvas: done :)")
      })
  } catch (error) {
    return console.log(error)
  }
}

module.exports = preloadGrapes;