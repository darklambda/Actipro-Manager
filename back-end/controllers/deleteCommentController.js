"use strict";
let { Comment } = require('../models');


module.exports.delete = function (req, res) {


    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('Solicitud no pudo ser Eliminada');
    });
};