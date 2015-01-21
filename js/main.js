var app = angular.module('superhero', [])

app.directive('superman', function(){
  return {
    restrict: "M", //stands for comment but it's barely used
    link: function(){
      alert("I'm working")
    }
  }
})
