
/**
 * Main Field objects
 */

 angular.module('edenClientApp')
 .service('objectService', function(){
 	var out = {};

 	out.getGround = function(){
 		var square = new createjs.Shape();
 		square.graphics.beginFill("#FF6633").drawRect(0,0,1280,800);
 		return square
 	}

 	out.getGardenBase = function(){
 		var square = new createjs.Shape();
 		square.graphics.beginFill("#883311").drawRect(220,20,780,780);
 		return square
 	}

 	out.getSolarPanel = function(){
 		var square = new createjs.Shape();
 		square.graphics.beginFill("black").drawRect(0,0,40,40);
 		square.rotation = 45
 		return square
 	}

 	 out.getPerson = function(){
 	 	var colors = ['red','blue','green','black','pink','red'];
 	 	var container = new createjs.Container();
 		var square = new createjs.Shape();
 		var choice = Math.floor(Math.random()*6);
 		square.graphics.beginFill(colors[choice]).drawRect(0,0,80,30);
 		var circle = new createjs.Shape();
 		circle.graphics.beginFill("pink").drawCircle(40,10,20);
 		container.addChild(square,circle);
 		return container;
 	}

 	return out;

 })