const CityController = require('./city-controller');

console.log('CityController being exported:', CityController); // Debug log

module.exports = {
    infoControllers: require('./info_controller'),
    Airplanecontroller: require('./airplane-controller'),
    CityController: CityController , // Be explicit with the export
    AirportController :require('./airport-controller')
}