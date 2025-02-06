const {StatusCodes} =require('http-status-codes');

const { AirportService } = require('../services'); 

const {errorResponse, successResponse} =require('../utils/common')

const createAirport = async (req, res) => {
    
    try {
        console.log("🚀 Inside createAirport Controller");
        console.log("📥 Data Received:", req.body);

        if (!AirportService || !AirportService.createAirport) {
            console.error("❌ AirportService or createAirport function is undefined");
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                error: "AirportService is not defined properly"
            });
        }
        console.log("🔍 Calling AirportService.createAirport...");
        if (!req.body || typeof req.body !== "object") {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid request body" });
        }

        const airport = await AirportService.createAirport(req.body);
        console.log("✅ Airport Created Successfully:", airport);
       
        successResponse.data = airport;
        return res.status(StatusCodes.CREATED).json(successResponse);
    } catch (error) {
        console.log("Error in createAirport:", error);
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });
    }
}

async function getAirports(req,res) {
    try {
        const airports =await AirportService.getAirports();
        successResponse.data=airports;
        return res.status(StatusCodes.OK).json( successResponse);
    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });   
    }
}

/**
 api/v1/airport:id
 */

async function getAirport(req,res) {
    try {
        const airport =await AirportService.getAirport(req.params.id);
        successResponse.data=airport;
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
async function destroyAirport(req,res) {
    try {
        const airport=await AirportService.destroyAirport(req.params.id);
        successResponse.data=airport;
        return res.status(StatusCodes.OK).json( successResponse);
    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });   
    }
}


async function updateAirport(req,res) {
    try {
        const airport=await AirportService.updateAirport(req.params.id,req.body);
        successResponse.data=airport;
        return res.status(StatusCodes.OK).json( successResponse);
    } catch (error) {
        console.log("error in controllers",error)
        return res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: error.message || "Internal Server Error"
        });   
    }
}



module.exports={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}