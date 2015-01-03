var exec   = require('child_process').exec;
var express = require('express');
var router = express.Router();

var counter = 0;
/* GET home page. */
router.get('/tests/run', function(req, res) {
	//exec('pwd', function(error, stdout, stderr){
	var path = '/images/' + counter++ +'.jpg';
	exec('raspistill -t 0 -o ./public'+path, function(error, stdout, stderr){
  		res.redirect(302, path);
  	});
});

module.exports = router;