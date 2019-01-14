"use strict";

let express = require('express');
let router = express.Router();
let registerController = require('../controllers/userRegisterController');

router.post('/', registerController.post);

module.exports = router;