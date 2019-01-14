"use strict";


module.exports.get = function (req, res) {
    req.session.destroy();
    res.status(200).json('Ha salido de su sesion exitosamente');
};