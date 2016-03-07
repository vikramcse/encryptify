var readPass = require('./lib/read-password.js');
var encrypt = require('./lib/encrypt.js');
var decrypt = require('./lib/decrypt.js');

module.exports = function(fileName) {
/* 
		Decrypt function ->
		- Read file
		- encrypt file with given password
		- save encrypted file to disk
	*/

	// callback for readPass
	var encryptFile = function(password) {
		//console.log(password);
		encrypt('a.txt', password);
	}

	readPass("password: ", encryptFile);

	// decrypt content
	// callback for readPass
	var decryptFile = function(password) {
		//console.log(password);
		decrypt('a.txt.enc', password);
	}

	readPass("password: ", decryptFile);

};