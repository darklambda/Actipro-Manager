"use strict";

let { E_Form } = require('../models');

module.exports.get = function (req, res) {

    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let Month = new Date(year,month);

    E_Form.findAll({where: {
        createdAt: {
            $gt: Month
        },
            service: 2
        },
        order: [ [ 'createdAt', 'DESC' ]]}).then( function(EFormsList) {
        res.json(EFormsList);
    });
};