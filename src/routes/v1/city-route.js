const express = require('express');
const { CityController } = require('../../controllers');
const { CityMiddleware } = require('../../middlewares');
const controllers = require('../../controllers');
const router = express.Router();

console.log('Full controllers object:', controllers);
console.log('CityController:', controllers.CityController);

//Use the controller without destructuring api/v1/cities /post request 
router.post('/',CityMiddleware.ValidateCreateRequest,
   CityController.createCity);

   //Use the controller without destructuring api/v1/cities /delete request 
router.delete('/:id', controllers.CityController.destroyCity);
      
   
module.exports=router;


