
/**
 * Main Field objects
 */

 angular.module('edenClientApp')
 .service('objectService', function(){
 	var out = {};
 	var gridSize = 20;
 	out.getGround = function(){
 		var square = new createjs.Shape();
 		square.graphics.beginFill("#FF6633").drawRect(0,0,1280,800);
 		return square
 	}

 	out.getGardenBase = function(){
 	 	var container = new createjs.Container();
 		var square = new createjs.Shape();
 		square.graphics.beginFill("#883311").drawRect(220,20,760,760);
 		container.addChild(square);
 		for (var i = 0; i < 760/gridSize+1; i++) {
 			for (var j = 0; j < 760/gridSize+1; j++) {
 			 	var square = new createjs.Shape();
 				square.graphics.beginStroke("#880000").drawRect(220,20,i*gridSize,j*gridSize);
 				container.addChild(square);	
 			};
 		};
 		var square = new createjs.Shape();
 		square.graphics.beginFill("#883311").drawRect(220,20,760,760);
 		return container;
 	}

 	out.getSolarPanel = function(){
 		var square = new createjs.Shape();
 		square.graphics.beginFill("black").drawRect(0,0,40,40);
 		square.rotation = 45
 		return square
 	}

 	 out.getPerson = function(){
 	 	var colors = ['red','blue','green','black','red'];
 	 	var skins = ['brown','pink','gray'];
 	 	var container = new createjs.Container();
 		var square = new createjs.Shape();

 		var choice = Math.floor(Math.random()*colors.length);
 		var skinchoice = Math.floor(Math.random()*skins.length);
 		square.graphics.beginFill(colors[choice]).drawRect(0,0,40,15);

 		var circle = new createjs.Shape();
 		circle.graphics.beginFill(skins[skinchoice]).drawCircle(20,7,10);
 		container.addChild(square,circle);
 		container.shadow = new createjs.Shadow("#000000", 3, 3, 5);
 		return container;
 	}

 	return out;

 })