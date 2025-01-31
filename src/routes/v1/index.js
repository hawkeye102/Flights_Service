const express = require('express'); 

const {infoControllers} =require('../../controllers')

const airplaneRoutes = require('./airplane-route');

const router = express.Router();



router.get('/info',infoControllers.info)

router.use('/airplanes', airplaneRoutes);


module.exports=router;
