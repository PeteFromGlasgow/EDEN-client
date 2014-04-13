 angular.module('edenClientApp')
 .service('componentService', function ($http){
 	var component = {};
 	var host = "http://127.0.0.1:9000/";

 	component.getComponents = function(cb){
 		$http({url: host+"components", method:"GET"})
 		.success(function(data){
 			cb(data);
 		});
 	}
    
    component.getEnvironments = function (cb){
        $http({url: host+"environments", method:"GET"})
        .success(function (data){
            cb(data);
        });
    }
    
    component.updateSimulation = function (simState, cb){
        $http({url: host+"simulate", method:"POST", data:{}})
        .success(function (data){
            cb(data);
        });
    }

 	return component;
 	
 })