const express = require('express'); 

const {infoControllers} =require('../../controllers')

const airplaneRoutes = require('./airplane-route');
const cityRoutes = require('./city-route');

const router = express.Router();
const airportRoutes=require('./airport-route')



router.get('/info',infoControllers.info)

router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);
router.use('/airports', airportRoutes);


module.exports=router;
