const {StatusCodes} =require('http-status-codes');

const { FlightService } = require('../services'); 

const {errorResponse, successResponse} =require('../utils/common')

const createFlight = async (req, res) => {
    try {
        console.log('controller is called',req.body)

        const flight= await FlightService.createFlight ({

           
            flightNumber:req.body.flightNumber,


            airplaneId:req.body.airplaneId,

            departureAirportId:req.body.departureAirportId,

            arrivalAirportId:req.body.arrivalAirportId,

            arrivalTime:req.body.arrivalTime,

            departureTime:req.body.departureTime,

            price: req.body.price,

            boardingGate:req.body.boardingGate,

            totalSeats:req.body.totalSeats


           
        });
        successResponse.data=flight;
        return res.status(StatusCodes.CREATED).json( successResponse);

    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });
    }
}
async function getAllFlights(req, res) {
    try {
        const flights = await FlightService.getAllFlights(req.query);
        successResponse.data = flights;
        return res
                .status(StatusCodes.CREATED)
                .json(successResponse);
    } catch(error) {
        errorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(errorResponse);
    }
}









module.exports={
    createFlight,
    getAllFlights
   
}