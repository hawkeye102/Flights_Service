const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} =require('../repositories');
const Apperror = require('../utils/errors/app-error');

const airplaneRepository=new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane= await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        console.log(error); // Logs full error details

        if (error.name === 'SequelizeValidationError') {
            throw new Apperror(
                error.errors.map(err => err.message).join(", "), // Collect validation messages
                StatusCodes.BAD_REQUEST
            );
        }

        throw new Apperror("Something went wrong", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes() {
    
    try {
        const airplanes  = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new Apperror("cannot fetch data of all the airplanes", StatusCodes.INTERNAL_SERVER_ERROR); 
    }
    
}

module.exports={
    createAirplane,
    getAirplanes
}