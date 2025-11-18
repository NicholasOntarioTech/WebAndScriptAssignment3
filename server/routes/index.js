var express = require('express');
var router = express.Router();

//Render homepage if URL is simply /
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

//Still render home page if URL is /home
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;

