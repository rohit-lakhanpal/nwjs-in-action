'use strict';

// Load necessary modules
var updateCurrentFolder = function (folderPath) {
	window.document.getElementById('current-folder').innerText = folderPath;
}

var addFileToMainArea = function (file) {
	var mainArea = window.document.getElementById('main-area');
	var template = window.document.querySelector('#item-template');
	template.content.querySelector('img').className = 'icon';
	template.content.querySelector('img').src = 'images/' + file.type + '.png';
	template.content.querySelector('.filename').innerText = file.file;	
	template.content.querySelector('img').classList.add(file.type);
	template.content.querySelector('img').setAttribute('data-filePath',file.path); 
	var clone = window.document.importNode(template.content, true);
	mainArea.appendChild(clone);
}

// Makes the folders clickable
//
// @param cb {Function} The function to execute when the double-click happens
//
var makeFoldersClickable = function (cb){
	window.$('.directory').on('dblclick', cb);
}

// Clears the main area of any content
//
var clearMainArea = function () {
	window.$('#main-area').html('');
} 

// Expose userInterface functions
module.exports = {
	addFileToMainArea : addFileToMainArea,
	clearMainArea: clearMainArea,	
	makeFoldersClickable : makeFoldersClickable,
	updateCurrentFolder : updateCurrentFolder
}; 