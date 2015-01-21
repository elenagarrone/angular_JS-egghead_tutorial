var app = angular.module('behaviorApp', [])

app.directive('enter', function(){
  return function(scope, element, attribute){
    element.bind('mouseenter', function(){
      element.addClass(attribute.enter); //this refer to the html
    })
  }
})

app.directive('leave', function(){
  return function(scope, element, attribute){
    element.bind('mouseleave', function(){
      element.removeClass(attribute.enter);
    })
  }
})
