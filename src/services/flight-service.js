const { StatusCodes } = require('http-status-codes');
const {FlightRepository} =require('../repositories');
const Apperror = require('../utils/errors/app-error');

const flightRepository=new FlightRepository();

async function createFlight(data) {
    try {
        const flight= await flightRepository.create(data);
        return flight;
    } catch (error) {
        console.error("Caught error object:", error)
        
        if (error.name === 'SequelizeValidationError') {
            throw new Apperror(
                error.errors.map(err => err.message).join(", "), // Collect validation messages
                StatusCodes.BAD_REQUEST
            );
        }

        throw new Apperror("cannot create a flight object", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}




module.exports={
    createFlight,
    
}