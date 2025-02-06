const { ValidateCreateRequest } = require("./airplane-middleware");
const { validateCreateRequest} =require('./airport-middleware')

module.exports={
    AirplaneMiddleware:require('./airplane-middleware'),
    CityMiddleware:require('./city-middleware'),
    AirportMiddleware:require('./airport-middleware')
}