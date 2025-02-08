const {Sequelize}=require('sequelize')
const {Flight,Airplane,Airport,City} = require('../models');
const crudRepository = require('./crud_repository');

class FlightRepository extends crudRepository{
    constructor(){
        super(Flight);
    }


    async getAllFlights(filter) {
  const response= await Flight.findAll({
    where:filter,
    // order:sort,

    include:[
      {
  model:Airplane,
  required :true ,// this is to convert outer joins to iner joins only fields with associated data will be here 
   as:"airplane_details"
    
    },
    {
      model:Airport,
      required :true,   // this is to convert outer joins to iner joins only fields with associated data will be here 
       as:"Departure_airport",
      on:
          //  col1:Sequelize.where (Sequelize.col('Flight.departureAirportId'),"=",Sequelize.col(Airport.codes)) this also works 
          // but make sure the syntax must be fine 

          Sequelize.literal("Flight.departureAirportId = Departure_airport.codes"), //  literal directly injects raw sql 
          include:{
            model:City,
            required:true
          },
        },
       

        {
          model:Airport,
          required:true,
          as:"Arrival_Airport",
          on: Sequelize.where(
            Sequelize.col("Flight.arrivalAirportId"),
            "=",
            Sequelize.col("Arrival_Airport.codes") // Use alias
          ),
          include:{
            model:City,
            required:true
        }
         
          }, 
          
  ]

  });
  return response
    }
}


module.exports=FlightRepository;