"use strict";

let { E_Form } = require('../models');

module.exports.get = function (req, res) {

    E_Form.findAll({
        order: [ [ 'createdAt', 'DESC' ]]}).then( function(EFormsList) {
        res.json(EFormsList);
    });
};