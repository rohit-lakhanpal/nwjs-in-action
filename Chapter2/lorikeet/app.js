// Load Node.js module "os"
var os = require("os");

// Load the osenv package
var osenv = require("osenv");

// This function detects the OS Platform version
var detectOs = function (){
	return os.platform();
}

// This function returns the user's home folder path 
var getUsersHomeFolder = function () {
	return osenv.home();
} 

// Alert OS
alert(detectOs());

// Alert home folder
alert(getUsersHomeFolder());