"use strict";

let { Extinguisher } = require('../models');

module.exports.post = function (req, res) {
    console.log(req.body);
    Extinguisher.create({
        serial_num: req.body.serial_num,
        brand: req.body.brand,
        client: req.body.client,
        plant: req.body.plant,
        address: req.body.address,
        state: req.body.state,
        p_cellphone: req.body.p_cellphone,
        r_name: req.body.r_name,
        r_cellphone: req.body.r_cellphone,
        c_name: req.body.c_name,
        c_cellphone: req.body.c_cellphone,
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('Extinguisher already registered');
    });
};