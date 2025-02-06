const {StatusCodes}=require('http-status-codes');

const {errorResponse} =require('../utils/common')


function validateCreateRequest(req,res,next){
    if(!req.body.name){
        errorResponse.message='something went wrong with the airports'
        errorResponse.error ={explanation:'name is not in correct form'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }

    if(!req.body.codes){
        errorResponse.message='something went wrong with the airports'
        errorResponse.error ={explanation:'codes  is not in correct form'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }

    if(!req.body.city_id){
        errorResponse.message='something went wrong with the airports'
        errorResponse.error ={explanation:'cityId is not in correct form'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }
    console.log("✅ Validation Passed, calling next()...");
    next();

}

module.exports={
    validateCreateRequest
}