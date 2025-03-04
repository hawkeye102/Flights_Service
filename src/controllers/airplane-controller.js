const {StatusCodes} =require('http-status-codes');

const { AirplaneServices } = require('../services'); 

const {errorResponse, successResponse} =require('../utils/common')

const createAirplane = async (req, res) => {
    try {
        
        const airplane= await AirplaneServices.createAirplane ({
            modelnumber:req.body.modelnumber,
            capacity : req.body.capacity
        });
        successResponse.data=airplane;
        return res.status(StatusCodes.CREATED).json( successResponse);

    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });
    }
}

async function getAirplanes(req,res) {
    try {
        console.log('is the error here ',req.body)
        console.log('🔍 Checking AirplaneServices:', AirplaneServices);

        if (!AirplaneServices || !AirplaneServices.getAirplanes) {
            throw new Error('AirplaneServices is not defined or missing getAirplanes method');
        }

        const airplanes =await AirplaneServices.getAirplanes();
        console.log('✅ Calling AirplaneServices.getAirplanes');
        successResponse.data=airplanes;
        return res.status(StatusCodes.OK).json( successResponse);
    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });   
    }
}

/**
 api/v1/airplanes:id
 */

async function getAirplane(req,res) {
    try {
        const airplanes =await AirplaneServices.getAirplane(req.params.id);
        successResponse.data=airplanes;
        return res.status(StatusCodes.OK).json( successResponse);
    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });   
    }
}

/* 
api/v1/airplanes/:id //  delete
*/
async function destroyAirplane(req,res) {
    try {
        const airplanes =await AirplaneServices.destroyAirplane(req.params.id);
        successResponse.data=airplanes;
        return res.status(StatusCodes.OK).json( successResponse);
    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });   
    }
}


async function updateAirplane(req,res) {
    try {
        const airplanes =await AirplaneServices.updateAirplane(req.params.id,req.body);
        successResponse.data=airplanes;
        return res.status(StatusCodes.OK).json( successResponse);
    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });   
    }
}



module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}