"use strict";

let { User } = require('../models');
let bcrypt = require('bcrypt');

module.exports.post = function (req, res) {

    User.findAll({where: {email: req.body.email}}).then( function(user){
            let compare = bcrypt.compareSync(req.body.password, user[0].dataValues.password);
            if (compare === true) {
                req.session.user = user[0];
                req.session.access = "user";
                req.session.name = user[0].name;
                console.log("i logged correctly");
                res.json(user[0]);
            } else {
                res.json('Contraseña erronea');
            }

    }).catch(function (err) {
        console.log(err, 'error');
        res.json('Correo electronico invalido');
    });
};