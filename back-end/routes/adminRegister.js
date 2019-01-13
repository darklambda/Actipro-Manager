"use strict";

let express = require('express');
let router = express.Router();
let adminRegisterController = require('../controllers/adminRegisterController');

router.post('/', adminRegisterController.post);

module.exports = router;