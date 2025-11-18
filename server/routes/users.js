var express = require('express');
var router = express.Router();

//I dont think this will be necessary for this project
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
