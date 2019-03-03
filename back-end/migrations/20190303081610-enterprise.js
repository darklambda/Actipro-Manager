'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Enterprises', {
          id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
          },
          rut: {
              type: Sequelize.STRING,
              unique: true
          },
          name: {
              type: Sequelize.STRING,
              unique: true
          },
          email: {
              type: Sequelize.STRING
          },
          address: {
              type: Sequelize.STRING
          },
          phone: {
              type: Sequelize.STRING
          },
          createdAt: {
              allowNull: false,
              type: Sequelize.DATE
          },
          updatedAt: {
              allowNull: false,
              type: Sequelize.DATE
          }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Enterprises');
  }
};
