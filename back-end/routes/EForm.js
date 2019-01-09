"use strict";

let express = require('express');
let router = express.Router();
let createEFormController = require('../controllers/createEFormController');
let getEFormController = require('../controllers/getEFormController');

router.post('/', createEFormController.post);
router.get('/:serial', getEFormController.get);

module.exports = router;