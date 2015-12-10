'use strict';

// Load required scripts
var fileSystem = require('./fileSystem');
var userInterface = require('./userInterface'); 

window.onload = function () {
	userInterface.updateCurrentFolder(fileSystem.getUsersHomeFolder());
	fileSystem.getFilesInFolder(
		fileSystem.getUsersHomeFolder(),
		function (err, files) {
			if (files && files.length > 0) {
				files.forEach(function (file) {
					userInterface.addFileToMainArea(file); 
				});
			}
		}
	);
}; 