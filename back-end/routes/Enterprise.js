"use strict";

let express = require('express');
let router = express.Router();
let createEnterpriseController = require('../controllers/createEnterpriseController');
let getEnterpriseController = require('../controllers/getEnterpriseController');
let deleteEnterpriseController = require('../controllers/deleteEnterpriseController');

router.post('/', createEnterpriseController.post);
router.get('/getAll', getEnterpriseController.get);
router.delete('/delete/:id', deleteEnterpriseController.delete);

module.exports = router;