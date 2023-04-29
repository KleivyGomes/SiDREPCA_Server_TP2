'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('course', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
      },
      internship_year: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      id_department: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        unique: {
          args: true,
          msg: "Id already exists in student table!"
        },
        references: { model: 'student', key: 'number'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('course')
  }
};
