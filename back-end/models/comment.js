'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.STRING,
    serial_num: DataTypes.STRING
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
      Comment.belongsTo(sequelize.model('Extinguisher'));
  };
  return Comment;
};