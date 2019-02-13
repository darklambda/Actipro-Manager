"use strict";

let { User } = require('../models');

module.exports.get = function (req, res) {

    User.findAll({order: [
            ['permission', 'ASC']
        ],}).then( function(Extinguishers) {
        res.json(Extinguishers);
    });
};