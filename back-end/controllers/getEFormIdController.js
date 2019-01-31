"use strict";

let { E_Form } = require('../models');

module.exports.get = function (req, res) {

    E_Form.findAll({where: {id: req.params.id}}).then( function(EFormsList) {
        res.json(EFormsList);
    });
};