
const {Flight} = require('../models');
const crudRepository = require('./crud_repository');

class FlightRepository extends crudRepository{
    constructor(){
        super(Flight);
    }
}
module.exports=FlightRepository;