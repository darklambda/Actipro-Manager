let express = require('express');
let router = express.Router();

let getUsersController = require('../controllers/getAllUsersController');

router.get('/all', getUsersController.get);

module.exports = router;