// This is how you share data between two controllers: you create a service using the factory, you return whatever object you want to use (APIs). Once you've defined a service, the data can be injected in the controllers.

var myApp = angular.module('myApp', []);

myApp.factory('Data', function () {
  return { message: "I'm data from a service" };
});


// We inject the 'Data into the first controller'
function FirstCtrl($scope, Data){
  $scope.data = Data;
}

function SecondCtrl($scope, Data){
  $scope.data = Data;
}