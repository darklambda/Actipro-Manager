"use strict";

let { Comment } = require('../models');
let { Extinguisher } = require('../models');

module.exports.post = function (req, res) {
    let extId = null;

    Extinguisher.findOne({where: {serial_num: req.body.serial_num}}).then(data => {
        extId = data.dataValues.id;
        console.log("id del extintor"+data.dataValues.id);
    });

    if(req.session.user.name) {

        Comment.create({
            date: Date(),
            name: req.session.user.name,
            email: req.session.user.email,
            comment: req.body.comment,
            serial_num: req.body.serial_num,
            ExtinguisherId: extId
        }).then(function (result) {
            res.json(result);
        }).catch(function (err) {
            console.log(err);
            res.json('Something Occurred');
        });
    }
};