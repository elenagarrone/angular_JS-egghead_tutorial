var app = angular.module('superhero', [])

app.directive('superman', function(){
  return {
    restrict: "A",
    link: function(){ //linking function to the A (attribute)
      alert("I'm working")
    }
  }
})
