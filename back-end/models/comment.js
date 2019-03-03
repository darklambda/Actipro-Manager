'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    date: DataTypes.DATE,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    comment: DataTypes.STRING,
    serial_num: DataTypes.STRING,
    check: DataTypes.BOOLEAN,
    enterprise: DataTypes.STRING,
      ExtinguisherId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
      Comment.belongsTo(sequelize.model('Extinguisher'));
  };
  return Comment;
};