
const {Airplane} = require('../models');
const crudRepository = require('./crud_repository');

class AirplaneRepository extends crudRepository{
    constructor(){
        super(Airplane);
    }
}
module.exports=AirplaneRepository;
