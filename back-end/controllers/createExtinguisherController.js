"use strict";

let { Extinguisher } = require('../models');

module.exports.post = function (req, res) {
    console.log(req.body);
    Extinguisher.create({
        serial_num: req.body.serial_num,
        ext_num: req.body.ext_num,
        typeExt: req.body.typeExt,
        weight: req.body.weight,
        client: req.body.client,
        plant: req.body.plant,
        address: req.body.address,
        con_name: req.body.con_name,
        con_email: req.body.con_email,
        con_tel: req.body.con_tel,
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('Extinguisher already registered');
    });
};