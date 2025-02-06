const {Airport} = require('../models');
const crudRepository = require('./crud_repository');

class AirportRepository extends crudRepository{
    constructor(){
        super(Airport);
    }
}
module.exports=AirportRepository;