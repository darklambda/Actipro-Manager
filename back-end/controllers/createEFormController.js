"use strict";
let { E_Form } = require('../models');
let { Extinguisher} = require('../models');


module.exports.post = function (req, res) {

    let extId = null;

    Extinguisher.findOne({where: {serial_num: req.body.serial}}).then(data => {
            extId = data.dataValues.id;
            console.log("id del extintor"+data.dataValues.id);
    });

    E_Form.create({
        service_date: req.body.service_date,
        service: req.body.service,
        s_name: req.body.s_name,
        observation: req.body.observation,
        description: req.body.description,
        future: req.body.future,
        serial: req.body.serial,
        ExtinguisherId: extId
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('E Form already registered');
    });
};