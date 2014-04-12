
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

 	 out.getPerson = function(){
 	 	var colors = ['red','blue','green','black','red'];
 	 	var container = new createjs.Container();
 		var square = new createjs.Shape();
 		var choice = Math.floor(Math.random()*5);
 		square.graphics.beginFill(colors[choice]).drawRect(0,0,80,30);
 		var circle = new createjs.Shape();
 		circle.graphics.beginFill("pink").drawCircle(40,10,20);
 		container.addChild(square,circle);
 		return container;
 	}

 	return out;

 })