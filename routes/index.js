var exec   = require('child_process').exec;
var gpio = require('rpi-gpio');
var express = require('express');
var router = express.Router();
var sleep = require('sleep')

var counter = 0;
/* GET home page. */
router.get('/tests/run', function(req, res) {
	//exec('pwd', function(error, stdout, stderr){
	
	var path = '/images/' + counter++ +'.jpg';
	exec('raspistill -t 0 -o ./public'+path, function(error, stdout, stderr){
  		gpio.setup(6, gpio.DIR_OUT, function(){
			gpio.write(6, true, function(err) {
        		if (err) throw err;
    			
    		});
    		sleep.sleep(4);
    		gpio.write(6, false, function(err) {
        			if (err) throw err;
        				
    		});
    		res.redirect(path);
		});
  	});

});

module.exports = router;