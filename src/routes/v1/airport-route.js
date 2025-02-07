const express = require('express');
const controllers = require('../../controllers');

// const airportController =require('../../controllers')

// // // Debug logs
// console.log('All controllers:', controllers);
// console.log('Airplane controller:', controllers.Airplanecontroller);
// console.log('Create airport method:', controllers.AirportController?.createAirport);




const {AirportMiddleware} =require('../../middlewares')

const router = express.Router();

// Use the controller without destructuring api/v1/airport /post request 
router.post('/', AirportMiddleware.validateCreateRequest,(req,res,next)=>{
    console.log("🚀 Airport POST route hit");
    console.log("📥 Request Body:", req.body);
    

    controllers.AirportController.createAirport(req,res,next);});


// Use the controller without destructuring api/v1/airport /get request 
router.get('/', 
    controllers.AirportController.getAirports);
 
    // Use the controller without destructuring api/v1/airport /:id/get request 
 
router.get('/:id', 
        controllers.AirportController.getAirport);


    
     // Use the controller without destructuring api/v1/airport /:id/ delete request 
 
router.delete('/:id', 
    controllers.AirportController.destroyAirport);


 // Use the controller without destructuring api/v1/airport /:id :/data/ partial update request 
   router.patch('/:id', 
        controllers.AirportController.updateAirport);
    

module.exports = router;