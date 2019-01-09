'use strict';
module.exports = (sequelize, DataTypes) => {
  const E_Form = sequelize.define('E_Form', {
    service_date: DataTypes.DATE,
    s_name: DataTypes.STRING,
    service: DataTypes.INTEGER,
    observation: DataTypes.STRING,
    conclusions: DataTypes.STRING,
    future: DataTypes.INTEGER,
    reasons: DataTypes.STRING,
    latest: DataTypes.BOOLEAN,
      serial: DataTypes.STRING,
      ExtinguisherId: DataTypes.INTEGER
  }, {});
  E_Form.associate = function(models) {
    // associations can be defined here
      E_Form.belongsTo(sequelize.model('Extinguisher'));
  };
  return E_Form;
};