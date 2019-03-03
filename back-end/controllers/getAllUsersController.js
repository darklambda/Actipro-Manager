"use strict";

let { User } = require('../models');

module.exports.get = function (req, res) {
    User.findAll({
        order: [ [ 'enterprise', 'DESC' ]]
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('Email ingresado ya se encuentra registrado');
    });
};