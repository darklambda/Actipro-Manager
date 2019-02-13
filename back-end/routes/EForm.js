"use strict";

let express = require('express');
let router = express.Router();
let createEFormController = require('../controllers/createEFormController');
let getEFormController = require('../controllers/getEFormController');
let deleteEFormController = require('../controllers/deleteEFormController');
let getEFormIdController = require('../controllers/getEFormIdController');
let editEFormController = require('../controllers/editEFormController');

router.post('/', createEFormController.post);
router.get('/:serial', getEFormController.get);
router.get('/id/:id', getEFormIdController.get);
router.delete('/delete/:id', deleteEFormController.delete);
router.put('/edit/:id', editEFormController.put);

module.exports = router;