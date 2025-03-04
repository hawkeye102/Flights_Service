'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Airports',{
      type:'FOREIGN KEY',
      fields:['city_id'],
      name: 'city-fk_constraint_name',
      references :{
        table:'Cities',
        fields:['id']
      },
      onUpdate:'CASCADE',
      onDelete:'CASCADE'

    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

   await queryInterface.removeConstraint('Airports','city-fk_constraint_name')
  }
};
