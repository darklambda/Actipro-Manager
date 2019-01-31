"use strict";
let { Extinguisher } = require('../models');


module.exports.delete = function (req, res) {


    Extinguisher.destroy({
        where: {
            serial_num: req.params.serial
        }
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('Ficha de Mantenimiento no pudo ser Eliminada');
    });
};