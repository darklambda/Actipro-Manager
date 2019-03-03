"use strict";
let { E_Form } = require('../models');
let { Extinguisher} = require('../models');


module.exports.post = function (req, res) {

    let extId = null;
    let enterprise = null;
    let plant = null;


    Extinguisher.findOne({where: {serial_num: req.body.serial}}).then(data => {
            extId = data.dataValues.id;
            enterprise = data.dataValues.client;
            plant = data.dataValues.plant;

            console.log(enterprise, plant, "????");

        E_Form.create({
            service_date: req.body.service_date,
            service: req.body.service,
            s_name: req.body.s_name,
            observation: req.body.observation,
            description: req.body.description,
            future: req.body.future,
            serial: req.body.serial,
            enterprise: enterprise,
            plant: plant,
            ExtinguisherId: extId
        }).then(function (result) {
            res.json(result);
        }).catch(function (err) {
            console.log(err);
            res.json('E Form already registered');
        });

    });

    console.log(enterprise,plant,"HOLAA");


};