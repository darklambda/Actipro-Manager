'use strict';
module.exports = (sequelize, DataTypes) => {
  const Extinguisher = sequelize.define('Extinguisher', {
    serial_num: DataTypes.STRING,
    ext_num: DataTypes.STRING,
    typeExt: DataTypes.STRING,
    weight: DataTypes.FLOAT,
    client: DataTypes.STRING,
    plant: DataTypes.STRING,
    address: DataTypes.STRING,
    con_name: DataTypes.STRING,
    con_email: DataTypes.STRING,
    con_tel: DataTypes.STRING
  }, {});
  Extinguisher.associate = function(models) {
    // associations can be defined here

      Extinguisher.hasMany(sequelize.model('E_Form'), {as: 'E_Forms'});
      Extinguisher.hasMany(sequelize.model('Comment'), {as: 'Comments'})
  };
  return Extinguisher;
};