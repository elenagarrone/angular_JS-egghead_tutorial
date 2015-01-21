var app = angular.module('superhero', [])

app.directive('superman', function(){
  return {
    restrict: "C", //stands for class
    link: function(){
      alert("I'm working")
    }
  }
})
