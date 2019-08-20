var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController');


router.post('/users', UserController.register);
router.post('/users/login', UserController.login);
router.post('/users/logout', UserController.logout);

module.exports = router;
