var app = angular.module('behaviorApp', [])

//Because putting restrict 'A' and 'link' is such a common user case, we can just write like this:
app.directive('enter', function(){
  return function(scope, element){
    element.bind('mouseenter', function(){
      console.log("I'm inside of you!");
    })
  }
})

app.directive('leave', function(){
  return function(scope, element){
    element.bind('mouseleave', function(){
      console.log("I'm leaving on a jet plane!");
    })
  }
})
