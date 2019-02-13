"use strict";

let express = require('express');
let router = express.Router();
let createExtinguisherController = require('../controllers/createExtinguisherController');
let getExtinguisherController = require('../controllers/getExtinguisherController');
let deleteExtinguisherController = require('../controllers/deleteExtinguisherController');
let getExtinguisherAllController = require('../controllers/getExtinguisherAllController');

router.post('/', createExtinguisherController.post);
router.delete('/delete/:serial', deleteExtinguisherController.delete);
router.get('/get/All', getExtinguisherAllController.get);
router.get('/:serial', getExtinguisherController.get);

module.exports = router;