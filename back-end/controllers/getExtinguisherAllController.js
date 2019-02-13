"use strict";

let { Extinguisher } = require('../models');

module.exports.get = function (req, res) {

    Extinguisher.findAll({order: [
            ['client', 'ASC']
        ],}).then( function(Extinguishers) {
        res.json(Extinguishers);
    });
};