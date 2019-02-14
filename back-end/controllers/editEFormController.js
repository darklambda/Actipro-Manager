"use strict";
let { E_Form } = require('../models');


module.exports.put = function (req, res) {

    E_Form.update(
        {service_date: req.body.service_date,
        s_name: req.body.s_name,
        service: req.body.service,
        observation: req.body.observation,
        description: req.body.conclusions,
        future: req.body.future},
        { where: { id: req.params.id }}
    ).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('An error ocurred');
    });
};