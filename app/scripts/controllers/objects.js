
/**
 * Main Field objects
 */

 angular.module('edenClientApp')
 .service('objectService', function(){
 	var out = {};

 	out.getGardenBase = function(){
 		var square = new createjs.Shape();
 		square.graphics.beginFill("brown").drawRect(0,0,1280,800);
 		return square
 	}

 	return out;

 })