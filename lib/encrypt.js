// The input file may be large so I am thinking to use Streams

var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var fs = require('fs');
var zlib = require('zlib');

var encrypt = function(fileName, toFile, password) {
	var readStream = fs.createReadStream(fileName);

	// zip content
	var zip = zlib.createGzip();

	// encrypt content
	var encrypt = crypto.createCipher(algorithm, password);

	// write content to new file with same name
	var writeStream = fs.createWriteStream(toFile);

	// pipe all the streams
	readStream
		.pipe(zip)
		.pipe(encrypt)
		.pipe(writeStream);
};

module.exports = encrypt;