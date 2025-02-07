const express = require('express');
const controllers = require('../../controllers');

// const airportController =require('../../controllers')

// // // Debug logs
// console.log('All controllers:', controllers);
// console.log('Airplane controller:', controllers.Airplanecontroller);
// console.log('Create airport method:', controllers.AirportController?.createAirport);




const {FlightMiddleware} =require('../../middlewares')

const router = express.Router();

// Use the controller without destructuring api/v1/airport /post request 
// router.post('/', FlightMiddleware.validateCreateRequest,
//     controllers.FlightController.createFlight);

router.post('/', FlightMiddleware.validateCreateRequest,(req,res,next)=>{
    console.log("🚀 Airport POST route hit");
    console.log("📥 Request Body:", req.body);
    

    controllers.FlightController.createFlight(req,res,next);});

    // /api/v1/flights?trips=MUM-DEL GET
router.get('/', 
    controllers.FlightController.getAllFlights);






module.exports = router;