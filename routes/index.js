var exec   = require('child_process').exec;
var gpio = require('rpi-gpio');
var express = require('express');
var router = express.Router();

var counter = 0;
/* GET home page. */
router.get('/tests/run', function(req, res) {
	//exec('pwd', function(error, stdout, stderr){
	
	var path = '/images/' + counter++ +'.jpg';
	exec('raspistill -t 0 -o ./public'+path, function(error, stdout, stderr){
  		gpio.setup(31, gpio.DIR_OUT, function(){
			gpio.write(31, true, function(err) {
        		if (err) throw err;
    			
    		});
    		gpio.write(31, false, function(err) {
        			if (err) throw err;
        				
    		});
    		res.redirect(path);
		});
  	});

});

module.exports = router;