// Load module "os"
var os = require("os");

// Load module "osenv"
var osenv = require("osenv");

// Load module async
var async = require("async");

// Load module fs
var fs = require("fs");

// Load module path
var path = require("path");


// This function detects the OS Platform version
var detectOs = function (){
	return os.platform();
}

// This function returns the user's home folder path 
var getUsersHomeFolder = function () {
	return osenv.home();
} 

// This function updates the current folder html element to the passed in path
var updateCurrentFolder = function (folderPath) {
	document.getElementById('current-folder').innerText = folderPath;
} 

// This function looks at whether a given file path // is a file or a folder, 
// and returns either an error or an object to the callback
var inspectAndDescribeFile = function (filePath, cb) { 
	var result = {
		file: path.basename(filePath), 
		path: filePath, 
		type: ''
	};
	
	fs.stat(filePath, function (err, stat) {
	    if (err) {
	        cb(err);
		}
	    if (stat.isFile()) {
			result.type = 'file';
		}
		if (stat.isDirectory()) {
			result.type = 'directory';
		}
		cb(err,result);
	}); 
}

// This function Looks at the files in a folder path, and determines whether 
// each file in that folder is a file or a folder
var getFilesInFolder = function (folderPath, cb) {
	fs.readdir(folderPath, function (err, files) {
		if (err) { 
			cb(err); 
		}
		async.map(files, function (file, internalCb) {
			var resolvedFilePath = path.resolve(folderPath, file);
			inspectAndDescribeFile(resolvedFilePath, internalCb);
		}, cb);
	});
} 

var addFileToMainArea = function (file) {
	var mainArea = document.getElementById('main-area');
	var template = document.querySelector('#item-template');
	template.content.querySelector('img').src = 'images/' + file.type + '.png';
	template.content.querySelector('.filename').innerText = file.file;
	var clone = document.importNode(template.content, true);
	mainArea.appendChild(clone);
} 

// Display the user's home folder on the screen
window.onload = function () {
	updateCurrentFolder(getUsersHomeFolder());
	getFilesInFolder(getUsersHomeFolder(), function (err, files) {
		if (files && files.length > 0) {
			files.forEach(function (file) {
				addFileToMainArea(file);
			});
		}
	});
};  

// Code from previous tasks
// // Alert OS
// alert(detectOs());

// // Alert home folder
// alert(getUsersHomeFolder());