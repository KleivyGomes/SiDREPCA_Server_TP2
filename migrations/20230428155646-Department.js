'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('department', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(70),
        allowNull: false,
        unique: true,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('department')
  }
};
