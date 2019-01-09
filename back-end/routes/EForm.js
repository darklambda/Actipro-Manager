"use strict";

let express = require('express');
let router = express.Router();
let createEFormController = require('../controllers/createEFormController');

router.post('/', createEFormController.post);

module.exports = router;