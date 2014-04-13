
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

 	out.getFlatPackGreenhouse = function(){
 	 	var container = new createjs.Container();
 	 	var width = 10 * gridSize;
 	 	var height = 10 * gridSize;

 		var square = new createjs.Shape();
 		square.graphics.beginFill("#FFF").drawRect(0,0,gridSize,height);
 		square.graphics.beginFill("#FFF").drawRect(0,0,width,gridSize);
 		square.graphics.beginFill("#FFF").drawRect(0,height-gridSize,width,gridSize);
 		square.graphics.beginFill("#FFF").drawRect(width,0,gridSize,height);

 		square.rotation =0;
 		container.addChild(square);

 	 	container.tickAnimate = function(){

 	 	}

 	 	return container;
 	}

 	 out.getBalloonGreenhouse = function(){
 	 	var container = new createjs.Container();
 	 	var width = 10 * gridSize;
 	 	var height = 10 * gridSize;

 		var square = new createjs.Shape();
 		square.graphics.beginStroke("#FFF").setStrokeStyle(20).drawCircle(width/2,width/2,width/2);

 		square.rotation =0;
 		container.addChild(square);

 	 	container.tickAnimate = function(){

 	 	}

 	 	return container;
 	}

 	out.getAwesomeGreenhouse = function(){
 	 	var container = new createjs.Container();
 	 	var width = 10 * gridSize;
 	 	var height = 10 * gridSize;

 		var square = new createjs.Shape();
 		square.graphics.beginStroke("#FFF").setStrokeStyle(10).drawPolyStar(0, 0, width/2, 6, 0.2, -90);
 		square.x +=width/2
 		square.y +=width/2

 		square.rotation =0;
 		container.addChild(square);

 	 	container.tickAnimate = function(){

 	 	}

 	 	return container;
 	}



 	return out;

 })