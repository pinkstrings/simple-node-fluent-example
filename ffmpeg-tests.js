var ffmpeg = require('fluent-ffmpeg');
var command = ffmpeg();

f = {
	input_path: process.cwd()+'/public/foo.mp3',
	output_path: process.cwd()+'/public/foo2.mp3',

	init: function(){

		console.log('ffmpeg-tests started.');

		// print file into to console
		// f.probeFile(f.input_path);

		f.saveToMP3(f.input_path, f.output_path);

	},

	saveToMP3: function($in, $out){
		command
			.input($in)
			.output($out)
			.on('error', function(err) {
		    console.log('An error occurred: ' + err.message);
		  })
		  .on('end', function() {
		    console.log('Processing finished !');
		  })
			.run();
	},

	probeFile: function($in){
		ffmpeg.ffprobe($in, function(err, metadata) {

			if (err) // will throw if file not found
				console.log('An error occurred: ' + err.message);

	    console.dir(metadata);
	    return this;
		});
	}
};

module.exports = f.init;