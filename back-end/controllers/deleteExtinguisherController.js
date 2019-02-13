"use strict";
let { Extinguisher } = require('../models');
let { E_Form } = require('../models');
let { Comment } = require('../models');


module.exports.delete = function (req, res) {

    E_Form.destroy({
        where: {
            serial: req.params.serial
        }
    });
    Comment.destroy({
        where: {
            serial_num: req.params.serial
        }
    });
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