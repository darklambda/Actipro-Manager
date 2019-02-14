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
      ext_num: {
        type: Sequelize.STRING,
      },
      typeExt: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.FLOAT
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
      con_name: {
        type: Sequelize.STRING
      },
      con_email: {
        type: Sequelize.STRING
      },
      con_tel: {
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