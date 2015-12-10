'use strict';

// Load necessary modules
var async = require('async');
var fs = require('fs');
var osenv = require('osenv');
var path = require('path');


// Define custom functions
var getUsersHomeFolder =function () {
	return osenv.home();
}

var inspectAndDescribeFile = function  (filePath, cb) {
	var result = {file: path.basename(filePath), path: filePath, type: ''};
	fs.stat(filePath, function (err, stat) {
		if (err) { cb(err); }
		if (stat.isFile()) { result.type = 'file'; }
		if (stat.isDirectory()) {result.type = 'directory'; }
		cb(err,result);
	});
}

var getFilesInFolder = function  (folderPath, cb) {
	fs.readdir(folderPath, function (err, files) {
		if (err) { cb(err); }
		async.map(files, function (file, internalCb) {
			var resolvedFilePath = path.resolve(folderPath,file);
			inspectAndDescribeFile(resolvedFilePath, internalCb);
		}, cb);
	});
}

// Expose fileSystem functions
module.exports = {
	getFilesInFolder : getFilesInFolder,
	getUsersHomeFolder : getUsersHomeFolder
}; 