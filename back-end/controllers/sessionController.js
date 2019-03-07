"use strict";

module.exports.get = function (req, res) {
    if (req.session.user){
        res.send(req.session);
    } else {
        res.status(200).json();
    }
};