'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Extinguishers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serial_num: {
        type: Sequelize.STRING,
          unique: true
      },
      brand: {
        type: Sequelize.STRING
      },
      client: {
        type: Sequelize.STRING
      },
      plant: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      p_cellphone: {
        type: Sequelize.STRING
      },
      r_name: {
        type: Sequelize.STRING
      },
      r_cellphone: {
        type: Sequelize.STRING
      },
      c_name: {
        type: Sequelize.STRING
      },
      c_cellphone: {
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
    return queryInterface.dropTable('Extinguishers');
  }
};