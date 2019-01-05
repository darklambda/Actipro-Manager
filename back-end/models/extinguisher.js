'use strict';
module.exports = (sequelize, DataTypes) => {
  const Extinguisher = sequelize.define('Extinguisher', {
    serial_num: DataTypes.STRING,
    brand: DataTypes.STRING,
    client: DataTypes.STRING,
    plant: DataTypes.STRING,
    address: DataTypes.STRING,
    state: DataTypes.STRING,
    p_cellphone: DataTypes.STRING,
    r_name: DataTypes.STRING,
    r_cellphone: DataTypes.STRING,
    c_name: DataTypes.STRING,
    c_cellphone: DataTypes.STRING
  }, {});
  Extinguisher.associate = function(models) {
    // associations can be defined here

      Extinguisher.hasMany(sequelize.model('E_Form'), {as: 'E_Forms'});
      Extinguisher.hasMany(sequelize.model('Comment'), {as: 'Comments'})
  };
  return Extinguisher;
};