//cloudinary
const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: 'wineec', 
    api_key: '274411769289487', 
    api_secret: '4gnVRFogqLYomf1Tdb0sNjZM-Qg' 
  });
  const a = require('../img/')
  cloudinary.v2.uploader.upload("../img/JW18.jpg",
    { public_id: "wjw18" }, 
    function(error, result) {console.log(result); 
  });