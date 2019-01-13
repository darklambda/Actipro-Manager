"use strict";

let express = require('express');
let router = express.Router();
let loginController = require('../controllers/adminLoginController');

router.post('/', loginController.post);

module.exports = router;