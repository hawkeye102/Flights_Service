'use strict';
const {
  Model,
  INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    modelnumber: {
      type:DataTypes.STRING,
    allowNull:false},

    capacity: {
     type: DataTypes.INTEGER,
    allowNull:false,
    validate: {
      max: {
        args: 1000,
        msg: "Capacity cannot exceed 1000"
      }
    }
  } },
  
    {
    sequelize,
    modelName: 'Airplane',
    tableName: 'Airplanes',
      timestamps: true,    
  });
  return Airplane;
};