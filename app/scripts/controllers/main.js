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
  .controller('MainCtrl', function ($scope, objectService, componentService, urlHelper) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var spaceQuake = false;

    // Main Game controller
    var stage = new createjs.Stage("gamecanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 40);
    //Set position of Shape instance.
    circle.x = circle.y = 50;
    //Add Shape instance to stage display list.

    var ground = objectService.getGround();
    var base = objectService.getGardenBase();
    var panel = objectService.getPerson();

    var panels = [];
    stage.addChild(ground);
    stage.addChild(base);
    console.log($scope);
    for (var i = 0; i < (urlHelper.getURLParameters("peoplecount") !== undefined ? parseInt(urlHelper.getURLParameters("peoplecount")) : 7); i++) {
      var panel = objectService.getPerson();
      panels.push(panel);
      stage.addChild(panel);
      panel.rotation=360*Math.random();
      panel.x += Math.random()*800;
      panel.y += Math.random()*800;
    };

    $scope.components = [];
      
    componentService.getComponents(function(comps){
      $scope.components = comps;
    });
    

    //Update stage will render next frame
    stage.update();

    window.onresize = function()
	{
	     onResize(stage);
	}
	window.onresize();

  
  
  var step = 0;
	setInterval(function(){
    for (var i = 0; i < panels.length; i++) {
     var panel = panels[i]
      panel.x+=2*Math.cos((panel.rotation+90)*0.0174532925);
      panel.y+=2*Math.sin((panel.rotation+90)*0.0174532925);
      step++;
      if(panel.x > 1300 || panel.x < -20 || panel.y > 820 || panel.y < -20){
        panel.rotation += 180;
      }
      panel.rotation+=Math.random()*4-2;
    };
    if (spaceQuake){
      stage.x =Math.sin(panel.rotation)*10;
      stage.y =Math.sin(panel.rotation)*10;
    }
    if (step % 1000 == 0){

    }

		stage.update();
	},33);

  });
