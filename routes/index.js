var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res) {
  res.sendfile(path.resolve(__dirname + "/../views/index.ejs"));
});

module.exports = router;
