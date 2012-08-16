var exec = require('child_process').exec;
var argv = require('optimist').argv;
var numpad = require('numpad');
var nrc = 0;
var child;



console.log("Ran with nrc:", numpad(argv.nrc, 5));

var execNext = function() {
	child = exec('node spider.js --u SYPER54 --p b1idyq54 --session 201109 --nrc ' + numpad(argv.nrc++, 5), function(err, stdout, stderr) {
		console.log('NRC#', numpad(argv.nrc, 5));
		console.log('stdout:', stdout);
		console.log('stderr:', stderr)
		if (err !== null) {
		  console.log('Output: ' + error);
		}
	});
	
	child.on('exit', function() {
		console.log("Finished.");
		
		if(numpad(argv.nrc, 5) == '99999') {
			console.log("REACHED 99999! Session is over.");
			process.exit(0);	
		}
		else {
			execNext();
		}
	});
};

execNext();