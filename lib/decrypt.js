var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var fs = require('fs');
var zlib = require('zlib');

var decrypt = function(fileName, toFile, password) {
	var readStream = fs.createReadStream(fileName);

	// zip content
	var unzip = zlib.createGunzip();

	// decrypt content
	var decrypt = crypto.createDecipher(algorithm, password)

	// write content to new file with same name
	// Remove out extension
	var writeStream = fs.createWriteStream(toFile);

	// pipe all the streams
	readStream
		.pipe(decrypt)
		.pipe(unzip)
		.pipe(writeStream);
};

module.exports = decrypt;