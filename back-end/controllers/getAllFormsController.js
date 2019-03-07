"use strict";

let { E_Form } = require('../models');

module.exports.get = function (req, res) {

    E_Form.findAll({where: {service: 2},
        order: [ [ 'createdAt', 'DESC' ]]}).then( function(EFormsList) {
        res.json(EFormsList);
    });
};