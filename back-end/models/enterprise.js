'use strict';
module.exports = (sequelize, DataTypes) => {
    const Enterprise = sequelize.define('Enterprise', {
        rut: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.STRING
    }, {});
    Enterprise.associate = function(models) {
        // associations can be defined here
    };
    return Enterprise;
};