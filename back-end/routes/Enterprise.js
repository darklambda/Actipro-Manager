"use strict";

let express = require('express');
let router = express.Router();
let createEnterpriseController = require('../controllers/createEnterpriseController');
let getEnterpriseController = require('../controllers/getEnterpriseController');

router.post('/', createEnterpriseController.post);
router.get('/getAll', getEnterpriseController.get);

module.exports = router;