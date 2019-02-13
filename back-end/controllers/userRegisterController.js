"use strict";

let { User } = require('../models');
let bcrypt = require('bcrypt');

module.exports.post = function (req, res) {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);
    console.log(req.body);
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        permission: req.body.permission,
        enterprise: req.body.enterprise
    }).then(function (result) {
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('Email ingresado ya se encuentra registrado');
    });
};