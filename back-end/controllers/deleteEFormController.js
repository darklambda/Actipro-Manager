"use strict";
let { E_Form } = require('../models');


module.exports.delete = function (req, res) {


    E_Form.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('Ficha de Mantenimiento no pudo ser Eliminada');
    });
};