const {StatusCodes}=require('http-status-codes');

const {errorResponse} =require('../utils/common')


function validateCreateRequest(req,res,next){
    if(!req.body.flightNumber){
        console.log('i am not getting the value',req.body)
        errorResponse.message='something went wrong with the flightNumber'
        errorResponse.error ={explanation:'flightNumber is not in correct form'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }

    if(!req.body.airplaneId){
        errorResponse.message='something went wrong with the  airplaneId'
        errorResponse.error ={explanation:' airplaneId is not in correct form'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }

    if(!req.body.departureAirportId){
        errorResponse.message='something went wrong with the departureAirportId'
        errorResponse.error ={explanation:'departureAirportId is not in correct form'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }
    if(!req.body.arrivalAirportId){
        errorResponse.message='something went wrong with the arrivalAirportId'
        errorResponse.error ={explanation:'arrivalAirportId is not in correct form'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }

    if(!req.body.arrivalTime){
        errorResponse.message='something went wrong with the  arrivalTime'
        errorResponse.error ={explanation:' arrivalTime is not in correct form'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }

    if(!req.body.departureTime){
        errorResponse.message='something went wrong with the departureTime'
        errorResponse.error ={explanation:'departureTime is not in correct form'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }

    if(!req.body.price){
        errorResponse.message='something went wrong with the price'
        errorResponse.error ={explanation:'price is not in correct form'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }

    if(!req.body.boardingGate){
        errorResponse.message='something went wrong with the  boardingGate'
        errorResponse.error ={explanation:' boardingGate is not in correct form'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }

    if(!req.body.totalSeats){
        errorResponse.message='something went wrong with the totalSeats'
        errorResponse.error ={explanation:' totalSeats is not in correct form'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }
    
    next();

}

module.exports={
    validateCreateRequest
}