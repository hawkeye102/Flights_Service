const {City} = require('../models');
const crudRepository = require('./crud_repository');

class CityRepository extends crudRepository{
    constructor(){
        super(City);
    }
}
module.exports=CityRepository;
