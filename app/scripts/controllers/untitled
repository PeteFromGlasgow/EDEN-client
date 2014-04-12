 angular.module('edenClientApp')
 .service('componentService', function ($http){
 	var component = {};
 	var host = "http://localhost:9000/";

 	component.getComponents = function(cb){
 		$http({url: host+"components", method:"GET"})
 		.success(function(data){
 			cb(data);
 		});
 	}

 	return component;
 	
 })