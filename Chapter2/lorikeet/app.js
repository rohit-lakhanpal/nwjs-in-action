 // Load Node.js module "os"
 var os = require("os");
 
 // This function detects the OS Platform version
 var detectOs = function (){
	 return os.platform();
 }
 
 // Alert OS
 alert(detectOs());