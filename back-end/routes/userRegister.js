"use strict";

let express = require('express');
let router = express.Router();
let registerController = require('../controllers/userRegisterController');
let getUsersController = require('../controllers/getUsersController');

router.post('/', registerController.post);
router.get('/get/All', getUsersController.get);


module.exports = router;