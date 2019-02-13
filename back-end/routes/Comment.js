"use strict";

let express = require('express');
let router = express.Router();
let createCommentController = require('../controllers/createCommentController');
let getCommentController = require('../controllers/getCommentController');
let deleteCommentController = require('../controllers/deleteCommentController');

router.post('/', createCommentController.post);
router.get('/:serial', getCommentController.get);
router.delete('/delete/:id', deleteCommentController.delete);

module.exports = router;