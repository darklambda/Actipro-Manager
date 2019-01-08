"use strict";

let express = require('express');
let router = express.Router();
let createExtinguisherController = require('../controllers/createExtinguisherController');
let getExtinguisherController = require('../controllers/getExtinguisherController');

router.post('/', createExtinguisherController.post);
router.get('/:serial', getExtinguisherController.get);

module.exports = router;