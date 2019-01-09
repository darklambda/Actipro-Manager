'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('E_Forms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      service_date: {
        type: Sequelize.DATE
      },
      s_name: {
        type: Sequelize.STRING
      },
      service: {
        type: Sequelize.INTEGER
      },
      observation: {
        type: Sequelize.STRING
      },
      conclusions: {
        type: Sequelize.STRING
      },
      future: {
        type: Sequelize.INTEGER
      },
      reasons: {
        type: Sequelize.STRING
      },
      latest: {
        type: Sequelize.BOOLEAN
      },
        serial: {
          type:Sequelize.STRING
        },
        ExtinguisherId: {
            type:Sequelize.INTEGER
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
    return queryInterface.dropTable('E_Forms');
  }
};