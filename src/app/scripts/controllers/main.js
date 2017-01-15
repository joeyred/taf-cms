'use strict';

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
