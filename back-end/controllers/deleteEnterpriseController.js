"use strict";
let { Enterprise } = require('../models');


module.exports.delete = function (req, res) {


    Enterprise.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('Empresa no pudo ser Eliminada');
    });
};