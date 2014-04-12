
/**
 * Main Field objects
 */

 angular.module('edenClientApp')
 .service('objectService', function(){
 	var out = {};

 	out.getGardenBase = function(){
 		var square = new createjs.Shape();
 		square.graphics.beginFill("brown").drawRect(220,20,780,780);
 		return square
 	}

 	out.getSolarPanel = function(){
 		var square = new createjs.Shape();
 		square.graphics.beginFill("black").drawRect(0,0,40,40);
 		square.rotation = 45
 		return square
 	}

 	return out;

 })