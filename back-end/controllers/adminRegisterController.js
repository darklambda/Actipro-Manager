"use strict";

let { Admin } = require('../models');
let bcrypt = require('bcrypt');

module.exports.post = function (req, res) {
        console.log(req.body.password);
        let hashedPassword = bcrypt.hashSync(req.body.password, 8);
        console.log(req.body);
        Admin.create({
            email: req.body.email,
            password: hashedPassword,
        }).then(function (result) {
            res.json(result);
        }).catch(function (err) {
            console.log(err);
            res.json('Email already in use');
        });

};