"use strict";
let { E_Form } = require('../models');
let { Extinguisher} = require('../models');


module.exports.post = function (req, res) {

    let extId = null;

    E_Form.update(
        { latest: false },
        { where: { serial: req.body.serial } }
    ).then(() => {});
    Extinguisher.findOne({where: {serial_num: req.body.serial}}).then(data => {
            extId = data.dataValues.id;
            console.log("id del extintor"+data.dataValues.id);
    });

    E_Form.create({
        service_date: req.body.service_date,
        s_name: req.body.s_name,
        service: req.body.service,
        observation: req.body.observation,
        conclusions: req.body.conclusions,
        future: req.body.future,
        reasons: req.body.reasons,
        latest: req.body.latest,
        serial: req.body.serial,
        ExtinguisherId: extId
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('E Form already registered');
    });
};