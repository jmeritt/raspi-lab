var exec   = require('child_process').exec;
var gpio = require('rpi-gpio');
var express = require('express');
var router = express.Router();
var sleep = require('sleep')

var counter = 0;
/* GET home page. */
router.get('/tests/run', function(req, res) {
	var path = '/images/' + counter++ +'.jpg';
	exec('raspistill -n -t 1 -o ./public'+path, function(error, stdout, stderr){
  		gpio.setup(31, gpio.DIR_OUT, function(){
		  gpio.write(31, true, function(err) {
            if (err) throw err;
            sleep.sleep(4);
            gpio.write(31, false, function(err) {
                if (err) throw err;    	
		          res.send({ testResults: path });
    		  });
    		
		  });
  	 });

    });
});
module.exports = router;
