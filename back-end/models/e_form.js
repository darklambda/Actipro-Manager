'use strict';
module.exports = (sequelize, DataTypes) => {
  const E_Form = sequelize.define('E_Form', {
    service_date: DataTypes.DATE,
    service: DataTypes.INTEGER,
    s_name: DataTypes.STRING,
    observation: DataTypes.STRING,
    description: DataTypes.STRING,
    future: DataTypes.INTEGER,
      serial: DataTypes.STRING,
      ExtinguisherId: DataTypes.INTEGER
  }, {});
  E_Form.associate = function(models) {
    // associations can be defined here
      E_Form.belongsTo(sequelize.model('Extinguisher'));
  };
  return E_Form;
};