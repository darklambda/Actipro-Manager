
"use strict";

let express = require('express');
let router = express.Router();
let sessionController = require('../controllers/sessionController');

router.get('/', sessionController.get);

module.exports = router;