'use strict';
// IDEA Store all variable stuff pertaining to the app only in one property as an object.
//      That way it that object can be removed or at least ignored when exported.
angular.module('contentManagmentApp')
.controller('mainCtrl', function($scope, dataService) {
  $scope.helloWorld = function() {
    console.log('Hello World Controller');
  };
  $scope.addPerson = function() {
    var person = {name: 'New Person', facts: []};
    $scope.people.push(person);
  };
  // Get data
  dataService.getPeople(function(response) {
    console.log(response.data);
    $scope.people = response.data;
  });
});
