const {Op} =require('sequelize')

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('airplanes', [{
      modelnumber:'boeying380',
      capacity:329,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      modelnumber:'airbus300',
      capacity:700,
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ]

)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('airplanes', 
       {[Op.or]:
        [
          { modelnumber:'boeying380'},
          {modelnumber:'airbus300'}
        ] 
      });
  } // thses two will bw removed when seed undo will be done 
};
