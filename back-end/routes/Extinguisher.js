"use strict";

let express = require('express');
let router = express.Router();
let createExtinguisherController = require('../controllers/createExtinguisherController');
let getExtinguisherController = require('../controllers/getExtinguisherController');
let deleteExtinguisherController = require('../controllers/deleteExtinguisherController');

router.post('/', createExtinguisherController.post);
router.get('/:serial', getExtinguisherController.get);
router.delete('/delete/:serial', deleteExtinguisherController.delete);

module.exports = router;