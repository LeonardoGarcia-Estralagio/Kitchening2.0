var express = require('express');
var router = express.Router();

/* /User */
router.get('/register', (req, res) => res.render('users/register', {
  title: 'register'
}));
router.get('/login', (req, res) => res.render('users/login', {
  title: 'login'
}));
router.get('/profile', (req, res) => res.render('users/profile', {
  title: 'profile'
}));


module.exports = router;
