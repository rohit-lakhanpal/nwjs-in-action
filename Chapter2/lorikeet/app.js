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

// This function updates the current folder html element to the passed in path
var updateCurrentFolder = function (folderPath) {
	document.getElementById('current-folder').innerText = folderPath;
} 

// Display the user's home folder on the screen
window.onload = function () {
	updateCurrentFolder(getUsersHomeFolder());
}; 

// Code from previous tasks
// // Alert OS
// alert(detectOs());

// // Alert home folder
// alert(getUsersHomeFolder());