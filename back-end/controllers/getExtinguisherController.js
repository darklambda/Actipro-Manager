"use strict";

let { Extinguisher } = require('../models');

module.exports.get = function (req, res) {

    Extinguisher.findAll({where: {serial_num: req.params.serial}}).then( function(Extinguisher) {
        res.json(Extinguisher);
    });
};