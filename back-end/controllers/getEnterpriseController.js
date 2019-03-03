"use strict";

let { Enterprise } = require('../models');

module.exports.get = function (req, res) {

    Enterprise.findAll({ order: [ [ 'name', 'DESC' ]]}).then( function(EFormsList) {
        res.json(EFormsList);
    });
};