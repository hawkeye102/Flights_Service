const {StatusCodes} = require('http-status-codes');

const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch(error) {
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
} 

async function destroyCity(id) {
    try {
        // First check if city exists
        const city = await cityRepository.get(id);
        if(!city) {
            throw new AppError('City not found', StatusCodes.NOT_FOUND);
        }
        // Then destroy
        const response = await cityRepository.destroy(id);
        return response;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw error;
        }
        throw new AppError('Cannot delete the city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(id) {
    
    try {
        const city  = await cityRepository.getAll(id);
        return city;
    } catch (error) {
        throw new AppError("cannot fetch data of all the cities", StatusCodes.INTERNAL_SERVER_ERROR); 
    }
    
}

module.exports = {
    createCity,
    destroyCity,
    getCity
}