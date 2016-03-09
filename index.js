#!/usr/bin/env node
'use strict';

var encrypt = require('./lib/encrypt.js');
var decrypt = require('./lib/decrypt.js');
var program = require('commander');
var co = require('co');
var prompt = require('co-prompt');


program
	.arguments('<source-file>')
	.arguments('<dest-file>')
	.option('-t, --type <type>', 'type of operation, encrypt or decrypt')
	.action(function (source, dest) {
		var type = program.type
		var fileName = source
		var toFile = dest
		
		co(function *() {
			var password = yield prompt.password('password: ');
			if (type === 'encrypt') {
				encrypt(fileName, toFile, password);
			} else if (type === 'decrypt') {
				decrypt(fileName, toFile, password);
			}
		});
	})
	.parse(process.argv);