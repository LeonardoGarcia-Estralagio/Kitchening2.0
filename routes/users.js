var express = require('express');
const {register, login, profile} = require('../controllers/usersController');
var router = express.Router();

/* /Users */
router.get('/register', register);
router.get('/login', login);
router.get('/profile', profile);


module.exports = router;
