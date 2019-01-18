"use strict";

let express = require('express');
let router = express.Router();
let createCommentController = require('../controllers/createCommentController');
let getCommentController = require('../controllers/getCommentController');

router.post('/', createCommentController.post);
router.get('/:serial', getCommentController.get);

module.exports = router;