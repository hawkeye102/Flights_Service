const {StatusCodes}=require('http-status-codes');

const {errorResponse} =require('../utils/common')


function ValidateCreateRequest(req,res,next){
    if(!req.body.modelnumber){
        errorResponse.message='something went wrong with the modelnumber'
        errorResponse.error ={explanation:'Model number is not in correct form'}
      return res.status(StatusCodes.BAD_REQUEST)
                 .json(errorResponse)
    }
    next();

}

module.exports={
    ValidateCreateRequest
}
