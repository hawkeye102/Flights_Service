'use strict';

const airplane = require('../models/airplane');

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
    await queryInterface.bulkInsert('Seats', [
      {
      airplaneId:2,
      row:1,
      col:'A',
      createdAt:new Date(),
      updatedAt:new Date()
    },

    {
      airplaneId:2,
      row:1,
      col:'B',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      airplaneId:2,
      row:1,
      col:'C',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      airplaneId:2,
      row:1,
      col:'D',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      airplaneId:2,
      row:1,
      col:'E',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      airplaneId:2,
      row:1,
      col:'F',
      createdAt:new Date(),
      updatedAt:new Date()
    },

    {
      airplaneId:2,
      row:2,
      col:'A',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    
    {
      airplaneId:2,
      row:2,
      col:'B',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      airplaneId:2,
      row:2,
      col:'C',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      airplaneId:2,
      row:2,
      col:'D',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      airplaneId:2,
      row:2,
      col:'E',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      airplaneId:2,
      row:2,
      col:'F',
      createdAt:new Date(),
      updatedAt:new Date()
    },
  ]

)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Seats', {
      airplaneId: 2, // Ensures only the seeded records are deleted
      row: { [Sequelize.Op.in]: [1, 2] }, // Matches rows 1 and 2
      col: { [Sequelize.Op.in]: ['A', 'B', 'C', 'D', 'E', 'F'] } // Matches all the seeded columns
    });
  }
  
};
