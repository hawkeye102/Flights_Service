
const {Flight} = require('../models');
const crudRepository = require('./crud_repository');

class FlightRepository extends crudRepository{
    constructor(){
        super(Flight);
    }


    async getAllFlights(filter) {
  const response= await Flight.findAll({
    where:filter
  });
  return response
    }
}


module.exports=FlightRepository;