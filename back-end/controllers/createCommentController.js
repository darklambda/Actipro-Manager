"use strict";

let { Comment } = require('../models');
let { Extinguisher } = require('../models');
let mailer = require('nodemailer');

module.exports.post = function (req, res) {
    let extId = null;

    Extinguisher.findOne({where: {serial_num: req.body.serial_num}}).then(data => {
        extId = data.dataValues.id;
        console.log("id del extintor"+data.dataValues.id);
    });

    if(req.session.user.name) {

        let transporter = mailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'usergonzalo@gmail.com',
                pass: 'thek1p2p'
            }
        });

        const mailOptions = {
            from: 'usergonzalo@gmail.com', // sender address
            to: 'gonzalo.oberreuter@sansano.usm.cl', // list of receivers
            subject: 'Nueva Solicitud en Extintor '+req.body.serial_num, // Subject line
            html: '<p>Esta fue una solicitud</p>'// plain text body
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if(err)
                console.log(err);
            else
                console.log(info);
        });
        console.log(req.session);

        Comment.create({
            date: Date(),
            name: req.session.user.name,
            email: req.session.user.email,
            comment: req.body.comment,
            serial_num: req.body.serial_num,
            check: false,
            enterprise: req.session.user.enterprise,
            ExtinguisherId: extId
        }).then(function (result) {
            res.json(result);
        }).catch(function (err) {
            console.log(err);
            res.json('Something Occurred');
        });

    } else {
        Comment.create({
            date: Date(),
            name: "Administrador",
            email: req.session.user.email,
            comment: req.body.comment,
            check: false,
            serial_num: req.body.serial_num,
            enterprise: req.session.user.enterprise,
            ExtinguisherId: extId
        }).then(function (result) {
            res.json(result);
        }).catch(function (err) {
            console.log(err);
            res.json('Something Occurred');
        });
    }
};