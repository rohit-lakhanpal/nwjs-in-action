'use strict';

// Load necessary modules
function updateCurrentFolder (folderPath) {
	window.document.getElementById('current-folder').innerText = folderPath;
}

function addFileToMainArea (file) {
	var mainArea = window.document.getElementById('main-area');
	var template = window.document.querySelector('#item-template');
	template.content.querySelector('img').src = 'images/' + file.type + '.png';
	template.content.querySelector('.filename').innerText = file.file;
	var clone = window.document.importNode(template.content, true);
	mainArea.appendChild(clone);
}

// Expose userInterface functions
module.exports = {
	addFileToMainArea : addFileToMainArea,
	updateCurrentFolder : updateCurrentFolder
}; 