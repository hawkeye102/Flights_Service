const { StatusCodes } = require('http-status-codes');
const {AirportRepository} =require('../repositories');
const Apperror = require('../utils/errors/app-error');

const airportRepository=new AirportRepository();

async function createAirport(data) {
    console.error("it is the problem:", data);
    try {
        if (!data.name || !data.codes || !data.city_id) {
            console.log("❌ Missing required fields in data:", data);
            throw new Apperror("Missing required fields", StatusCodes.BAD_REQUEST);
        }


        const airport= await  airportRepository.create(data);
        console.log("✅ Airport Created Successfully:", airport);  // Log after creation
        return airport;
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

async function getAirports() {
    
    try {
        const airport  = await airportRepository.getAll();
        return airport;
    } catch (error) {
        throw new Apperror("cannot fetch data of all the airport", StatusCodes.INTERNAL_SERVER_ERROR); 
    }
    
}

 async function getAirport(id){
   try {
    const airport  = await  airportRepository.get(id);
        return airport;
   } catch (error) {
    if(error.statusCode == StatusCodes.NOT_FOUND){
        throw new Apperror("the airport you requested in not present",error.statusCode);
    }
    throw new Apperror("cannot fetch data of all the airport", StatusCodes.INTERNAL_SERVER_ERROR); 
   }
}

async function destroyAirport(id) {
    try {
        const response = await  airportRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new Apperror("the Airport you requested to delete is not present",error.statusCode);
        }
        throw new Apperror("cannot fetch data of all the airport", StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}


async function updateAirport(id,data) {
    try {
        const response = await  airportRepository.update(id,data);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new Apperror("the airport you requested to update is not present",error.statusCode);
        }
        throw new Apperror("cannot fetch data of all the airport", StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}


module.exports={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}