const {Enums}=require('../utils/common')
const {BUSINESS,ECONOMY,FIRST_CLASS,PREMIUM} =Enums.SEAT_TYPES;

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId',
        

      })
    }
  }
  Seat.init({
    airplaneId: {
      type:DataTypes.INTEGER,
    allowNull:false},

    row:{ 
      type:DataTypes.INTEGER,
    allowNull:false},

    col:{type:DataTypes.STRING,
      allowNull:false
    } ,
    type:{
      type:DataTypes.ENUM,
      // values:['premium','economy','business','first-class'], // the raw files are lying here lets make it in a new comman file
      values:[BUSINESS,ECONOMY,FIRST_CLASS,PREMIUM],
      defaultValue:ECONOMY,
      allowNull:false
     
    } 
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};