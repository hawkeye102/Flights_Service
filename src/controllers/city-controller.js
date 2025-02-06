const {StatusCodes} =require('http-status-codes');

const {Cityservice} = require('../services'); 

const {errorResponse, successResponse} =require('../utils/common')

/**
 * 
 * POST : /cities 
 * req body {name:london}
 */
const createCity = async (req, res) => {
    try {
        
        const city= await Cityservice.createCity ({
           name:req.body.name
        });
        successResponse.data=city;
        return res.status(StatusCodes.CREATED).json( successResponse);

    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });
    }
}

const destroyCity = async (req, res) => {
    try {
        const city =await Cityservice.destroyCity(req.params.id);
        successResponse.data=city;
        return res.status(StatusCodes.OK).json( successResponse);
    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });   
    }
}


const getCity = async (req, res) => {
    try {
        const city =await Cityservice.getCity();
        successResponse.data=city;
        return res.status(StatusCodes.OK).json( successResponse);
    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });   
    }
}

const getoneCity = async (req, res) => {
    try {
        const city =await Cityservice.getoneCity(req.params.id);
        successResponse.data=city;
        return res.status(StatusCodes.OK).json( successResponse);
    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });   
    }
}


async function updateCity(req,res) {
    try {
        const city =await Cityservice.updateCity(req.params.id,req.body);
        successResponse.data=city;
        return res.status(StatusCodes.OK).json( successResponse);
    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });   
    }
}







module.exports={
createCity,
destroyCity,
getCity,
updateCity,
getoneCity
}
