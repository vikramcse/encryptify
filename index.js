var readPass = require('./lib/read-console.js');
var encrypt = require('./lib/encrypt.js');
var decrypt = require('./lib/decrypt.js');


var type = process.argv[2];
var fileName = process.argv[3];
var toFile = process.argv[4];

// callback for readPass
var encryptFile = function(password) {
	encrypt(fileName, toFile, password);
}

var decryptFile = function(password) {
	decrypt(fileName, toFile, password);
}

if (type === 'encrypt') {
	readPass("password: ", encryptFile);
} else if (type === 'decrypt') {
	readPass("password: ", decryptFile);
} else {
	console.log("Please read documentation");
}