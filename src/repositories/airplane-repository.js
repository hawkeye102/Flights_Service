
const {Airplane} = require('../models');
const crudRepository = require('./crud_repository');

class AirplaneRepository extends crudRepository{
    constructor(){
        super(Airplane);
    }
    
}


// async function testDBConnection() {
//     try {
//         const airplanes = await Airplane.findAll();
//         console.log("✅ Successfully fetched airplanes:", airplanes);
//     } catch (error) {
//         console.error("❌ Sequelize DB error:", error);
//     }
// }

// testDBConnection();
 
// useful for testing the db connection  

module.exports=AirplaneRepository;
