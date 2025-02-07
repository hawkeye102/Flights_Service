const { StatusCodes } = require('http-status-codes');
const {FlightRepository} =require('../repositories');
const Apperror = require('../utils/errors/app-error');
const{Op} =require('sequelize')

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

async function getAllFlights(query) {
    let customFilter = {};
    let sortFilter = [];
    const endingTripTime = " 23:59:00";
    // trips=MUM-DEL
    if(query.trips) {
       
       [departureAirportId, arrivalAirportId] = query.trips.split("-"); 
       customFilter.departureAirportId = departureAirportId;
       customFilter.arrivalAirportId = arrivalAirportId;
       // TODO: add a check that they are not same
    }
    if(query.price) {
        [minPrice, maxPrice] = query.price.split("-");
        customFilter.price = {
            [Op.between]: [minPrice, ((maxPrice == undefined) ? 20000: maxPrice)]
        }
    }
    if(query.travellers) {
        customFilter.totalSeats = {
            [Op.gte]: query.travellers
        }
    }
    if(query.tripDate) {
        customFilter.departureTime = {
            [Op.between]: [query.tripDate, query.tripDate + endingTripTime]
        }
    }
    if(query.sort) {
        const params = query.sort.split(',');
        const sortFilters = params.map((param) => param.split('_'));
        sortFilter = sortFilters
    }
    console.log(customFilter, sortFilter);
    try {
        const flights = await flightRepository.getAllFlights(customFilter);
        return flights;
    } catch(error) {
        console.log(error);
        throw new AppError('Cannot fetch data of all the flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

// async function getFlight(id) {
//     try {
//         const flight = await flightRepository.get(id);
//         return flight;
//     } catch(error) {
//         if(error.statusCode == StatusCodes.NOT_FOUND) {
//             throw new AppError('The flight you requested is not present', error.statusCode);
//         }
//         throw new AppError('Cannot fetch data of the flight', StatusCodes.INTERNAL_SERVER_ERROR);
//     }
// }





module.exports={
    createFlight,
    getAllFlights
    
}