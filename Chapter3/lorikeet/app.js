'use strict';

// Load required scripts
var fileSystem = require('./fileSystem');
var userInterface = require('./userInterface'); 


// Loads the folder
var loadFolder = function (folderPath) {
	// clear main area
	userInterface.clearMainArea(); 

	// update current folder path
	userInterface.updateCurrentFolder(folderPath);

	// get contents of the current folder, display them & make them clickable
	fileSystem.getFilesInFolder(folderPath, function (err, files) {
		if (files && files.length > 0) {
			// display files/folders
			files.forEach(function (file) {
				userInterface.addFileToMainArea(file); 
			});
			// add click event handler to files/folders
			userInterface.makeFoldersClickable(function (event) {
				var folderPath = window.$(event.target).data('filepath');				
				loadFolder(folderPath);
			});
		}
	});
} 


window.onload = function () {
	loadFolder(fileSystem.getUsersHomeFolder()); 
}; 