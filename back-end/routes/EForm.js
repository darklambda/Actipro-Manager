"use strict";

let express = require('express');
let router = express.Router();
let createEFormController = require('../controllers/createEFormController');
let getEFormController = require('../controllers/getEFormController');
let deleteEFormController = require('../controllers/deleteEFormController');
let getEFormIdController = require('../controllers/getEFormIdController');

router.post('/', createEFormController.post);
router.get('/:serial', getEFormController.get);
router.get('/id/:id', getEFormIdController.get);
router.delete('/delete/:id', deleteEFormController.delete);

module.exports = router;