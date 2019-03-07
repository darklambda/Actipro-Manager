"use strict";

let express = require('express');
let router = express.Router();
let createCommentController = require('../controllers/createCommentController');
let getCommentController = require('../controllers/getCommentController');
let deleteCommentController = require('../controllers/deleteCommentController');
let getRequestsController = require('../controllers/getRequestsController');
let checkReqiestsController = require('../controllers/requestCheckController');

router.post('/', createCommentController.post);
router.get('/:serial', getCommentController.get);
router.delete('/delete/:id', deleteCommentController.delete);
router.get('/requests/all', getRequestsController.get);
router.put('/requestCheck/:id', checkReqiestsController.put);

module.exports = router;