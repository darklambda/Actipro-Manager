"use strict";

let { E_Form } = require('../models');

module.exports.get = function (req, res) {

    E_Form.findAll({where: {serial: req.params.serial},
        order: [ [ 'createdAt', 'DESC' ]]}).then( function(EFormsList) {
        res.json(EFormsList);
    });
};