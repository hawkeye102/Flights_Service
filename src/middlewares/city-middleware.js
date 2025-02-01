const {StatusCodes}=require('http-status-codes');

const {errorResponse} =require('../utils/common')
const Apperror =require('../utils/errors/app-error')


function ValidateCreateRequest(req,res,next){
    if(!req.body.name){
        errorResponse.message='something went wrong while creating city name '
        errorResponse.error ={explanation:'city name is not found'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }
    next();

}

module.exports={
    ValidateCreateRequest
}