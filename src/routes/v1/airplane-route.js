const express = require('express');
const controllers = require('../../controllers');

// // Debug logs
// console.log('All controllers:', controllers);
// console.log('Airplane controller:', controllers.Airplanecontroller);
// console.log('Create airplane method:', controllers.Airplanecontroller?.createAirplane);

const {AirplaneMiddleware} =require('../../middlewares')

const router = express.Router();

// Use the controller without destructuring api/v1/airplanes /post request 
router.post('/', AirplaneMiddleware.ValidateCreateRequest,
    controllers.Airplanecontroller.createAirplane);


// Use the controller without destructuring api/v1/airplanes /get request 
router.get('/', 
    controllers.Airplanecontroller.getAirplanes);
 
    // Use the controller without destructuring api/v1/airplanes /:id/get request 
 
router.get('/:id', 
        controllers.Airplanecontroller.getAirplane);


    
     // Use the controller without destructuring api/v1/airplanes /:id/ delete request 
 
router.delete('/:id', 
    controllers.Airplanecontroller.destroyAirplane);


 // Use the controller without destructuring api/v1/airplanes /:id :/data/ partial update request 
   router.patch('/:id', 
        controllers.Airplanecontroller.updateAirplane);
    

module.exports = router;