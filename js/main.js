var app = angular.module('superhero', [])

app.directive('superman', function(){
  return {
    restrict: "E",
    template: "<section>Here I am to save the day</section>"
  }
})
