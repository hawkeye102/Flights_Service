const { StatusCodes } = require('http-status-codes');
const {AirplaneRepository} =require('../repositories');
const Apperror = require('../utils/errors/app-error');

const airplaneRepository=new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane= await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        console.error("Caught error object:", error)
        
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
        console.log('the rpo is working fine')
        const airplanes  = await airplaneRepository.getAll();
        console.log("✅ Airplanes fetched:", airplanes);
        return airplanes;
    } catch (error) {
        throw new Apperror("cannot fetch data of all the airplanes", StatusCodes.INTERNAL_SERVER_ERROR); 
    }
    
}

 async function getAirplane(id){
   try {
    const airplane  = await airplaneRepository.get(id);
        return airplane;
   } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
        throw new Apperror("the plane you requested in not present",error.statusCode);
    }
    throw new Apperror("cannot fetch data of all the airplanes", StatusCodes.INTERNAL_SERVER_ERROR); 
   }
}

async function destroyAirplane(id) {
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new Apperror("the plane you requested to delete is not present",error.statusCode);
        }
        throw new Apperror("cannot fetch data of all the airplanes", StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}


async function updateAirplane(id,data) {
    try {
        const response = await airplaneRepository.update(id,data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new Apperror("the plane you requested to update is not present",error.statusCode);
        }
        throw new Apperror("cannot fetch data of all the airplanes", StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}


module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}