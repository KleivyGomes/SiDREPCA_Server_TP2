'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('student_course_stage', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      year: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      student_number: {
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
      id_course: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        unique: {
          args: true,
          msg: "Id already exists in course table!"
        },
        references: { model: 'course', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      id_internship: {
        type: Sequelize.INTEGER,
        defaultValue: null,
        unique: {
          args: true,
          msg: "Id already exists in internship table!"
        },
        references: { model: 'internship', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('student_course_stage')
  }
};
