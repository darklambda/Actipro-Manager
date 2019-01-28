"use strict";

let { Comment } = require('../models');

module.exports.get = function (req, res) {

    Comment.findAll({where: {serial_num: req.params.serial}, order: [ [ 'createdAt', 'DESC' ]]}).then( function(Comments) {
        res.json(Comments);
    });
};