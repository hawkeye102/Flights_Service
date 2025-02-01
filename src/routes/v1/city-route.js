const express = require('express');
const {CityController} =require('../../controllers');
const { CityMiddleware } = require('../../middlewares');
const controllers = require('../../controllers');
const router = express.Router();

//Use the controller without destructuring api/v1/cities /post request 
router.post('/',CityMiddleware.ValidateCreateRequest,
   CityController.createCity);

module.exports=router;


