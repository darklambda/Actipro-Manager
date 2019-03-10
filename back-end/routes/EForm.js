"use strict";

let express = require('express');
let router = express.Router();
let createEFormController = require('../controllers/createEFormController');
let getEFormController = require('../controllers/getEFormController');
let deleteEFormController = require('../controllers/deleteEFormController');
let getEFormIdController = require('../controllers/getEFormIdController');
let editEFormController = require('../controllers/editEFormController');
let getAllFormsController = require('../controllers/getAllFormsController');
let getFormMonthController = require('../controllers/getFormMonthController');

router.post('/', createEFormController.post);
router.get('/forms/all', getAllFormsController.get);
router.get('/forms/all/month', getFormMonthController.get);
router.get('/:serial', getEFormController.get);
router.get('/id/:id', getEFormIdController.get);
router.delete('/delete/:id', deleteEFormController.delete);
router.put('/edit/:id', editEFormController.put);


module.exports = router;