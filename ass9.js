//the code in this file was taken from Curran Kelleher's introToAngular screencast example #26
//code creates a controller for our app. It uses angulars $http to read data from a json file. 
var myApp = angular.module('myApp', []);
	myApp.controller('ass9Ctrl', function ($scope, $http){
  $http.get('ass9.json').success(function(data) {
  	$scope.states = data;
    });
    
    //here we are setting default values for how the data is sorted.
    //reverse is set to true so we know to switch how we are sorting things.
    $scope.sortfield = 'name';
    $scope.reverse = true;
    
  });