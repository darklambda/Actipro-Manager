"use strict";

let express = require('express');
let router = express.Router();
let createExtinguisherController = require('../controllers/createExtinguisherController');

router.post('/', createExtinguisherController.post);

module.exports = router;