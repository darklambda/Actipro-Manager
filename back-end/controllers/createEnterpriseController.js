"use strict";
let { Enterprise } = require('../models');


module.exports.post = function (req, res) {


    Enterprise.create({
        rut: req.body.rut,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('E Form already registered');
    });
};