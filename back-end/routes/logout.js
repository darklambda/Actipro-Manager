"use strict";

let express = require('express');
let router = express.Router();
let logoutController = require('../controllers/logoutController');

router.get('/', logoutController.get);

module.exports = router;