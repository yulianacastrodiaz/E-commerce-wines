const { Router } = require('express');
const bodyParser = require('body-parser');
const router = Router();
require('dotenv').config();
const mercadopago = require ('mercadopago');
//credenciales sandbox de MercadoPago
const { MERPA_PUBLIC_KEY, MERPA_ACCS_TOKEN} = process.env

//middlewares
router.use(bodyParser.json())


// seteo credenciales
mercadopago.configure({
    access_token: MERPA_ACCS_TOKEN
  });


//objeto de preferencias
  let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "<%= global.id %>" en tu HTML
  global.id = response.body.id;
}).catch(function(error){
  console.log(error);
});

module.exports = router;