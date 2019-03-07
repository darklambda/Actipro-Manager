"use strict";
let { Enterprise } = require('../models');
let { User } = require('../models');


module.exports.delete = function (req, res) {

    Enterprise.findOne({
        where: {
            id: req.params.id
        }
    }).then(function (result) {
        User.destroy({
            where: {
                enterprise: result.name
            }
        })
    }).catch(function (err) {
        console.log(err);
        res.json('Empresa no pudo ser Eliminada');
    });

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