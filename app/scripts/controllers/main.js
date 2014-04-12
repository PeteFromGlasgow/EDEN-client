'use strict';


// Stolen so we dont have to care about the canvas
function onResize(stage)
{
var keepAspectRatio = true;
// browser viewport size
var canvasparent = $('#gamecanvas').parent();
var w = canvasparent.innerWidth();
var h = canvasparent.innerHeight();


// stage dimensions
var ow = 1280; // your stage width
var oh = 800; // your stage height

if (keepAspectRatio)
{
    // keep aspect ratio
    var scale = Math.min(w / ow, h / oh);
    stage.scaleX = scale;
    stage.scaleY = scale;

   // adjust canvas size
   stage.canvas.width = ow * scale;
  stage.canvas.height = oh * scale;
}
else
{
    // scale to exact fit
    stage.scaleX = w / ow;
    stage.scaleY = h / oh;

    // adjust canvas size
    stage.canvas.width = ow * stage.scaleX;
    stage.canvas.height = oh * stage.scaleY;
   }

 // update the stage
stage.update()
}



angular.module('edenClientApp')
  .controller('MainCtrl', function ($scope, objectService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Main Game controller
    var stage = new createjs.Stage("gamecanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 40);
    //Set position of Shape instance.
    circle.x = circle.y = 50;
    //Add Shape instance to stage display list.

    var base = objectService.getGardenBase();
    var panel = objectService.getSolarPanel();
    stage.addChild(base);
    stage.addChild(panel);

    //Update stage will render next frame
    stage.update();

    window.onresize = function()
	{
	     onResize(stage);
	}
	window.onresize();

	setInterval(function(){
		panel.x++;
    panel.y+=2;
    panel.rotation++;
		stage.update();
	},33);

  });
