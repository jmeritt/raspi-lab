var exec   = require('child_process').exec;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tests/run', function(req, res) {
	//exec('pwd', function(error, stdout, stderr){
	exec('raspistill -o ./public/images/newResults.jpg', function(error, stdout, stderr){
  		res.redirect(302, '/images/newResults.jpg');
  	});
});

module.exports = router;
