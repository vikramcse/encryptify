var readline = require('readline');

// \033[2K -> Esc2K clears the line
// \033[200D -> Esc200D scrolls window up one line
var hidden = function(query, callback) {
	var stdin = process.openStdin();
	
	var rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	

	process.stdin.on("data", function(char) {
		char = char + "";

		switch (char) {
			case "\n":
			case "\r":
			case "\u0004":
				stdin.pause();
				break;
			default:
				process.stdout.write("\033[2K\033[200D" + query + Array(rl.line.length + 1).join("*"));
				break;
		}
	});

	rl.question(query, function(value) {
		rl.history = rl.history.slice(1);
		callback(value);
	});
};

module.exports = hidden;