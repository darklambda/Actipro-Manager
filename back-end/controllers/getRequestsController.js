"use strict";

let { Comment } = require('../models');

module.exports.get = function (req, res) {

    Comment.findAll({where: {check: false}, order: [ [ 'createdAt', 'DESC' ]]}).then( function(Comments) {
        res.json(Comments);
    });
};