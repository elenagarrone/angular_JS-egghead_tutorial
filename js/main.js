var myApp = angular.module('myApp', []);

myApp.factory('Data', function () {
  return { message: "I'm data from a service" };
});


function FirstCtrl($scope, Data){
  $scope.data = Data;
}

function SecondCtrl($scope, Data){
  $scope.data = Data;
  // creating a method for the controller:
  $scope.reversedMessage = function(message){
    return message.split("").reverse().join("");
  }
}