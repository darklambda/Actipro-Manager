"use strict";
let { Comment } = require('../models');


module.exports.put = function (req, res) {


    Comment.update(
        {
            check: true
        },
        { where: { id: req.params.id }}
    ).then(function (result) {
        console.log("hola");
        res.json(result);
    }).catch(function (err) {
        console.log(err);
        res.json('An error ocurred');
    });
};