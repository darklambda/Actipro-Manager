"use strict";

module.exports.get = function (req, res) {
    if (req.session.user){
        res.send(req.session);
    } else {
        console.log("no funca");
        res.status(200).json();
    }
};