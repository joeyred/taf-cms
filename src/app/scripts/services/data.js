'use strict';

angular.module('contentManagmentApp')
.service('dataService', function($http) {
  this.getPeople = function(callback) {
    $http.get('data/mock.json').then(callback);
  };
  this.deletePerson = function(person) {
    console.log('service to delete ' + person.name + 'fired');
    // Delete Logic Here
  };
  this.savePerson = function(person) {
    console.log('service to save ' + person.name + 'fired');
    // Save Logic Here
  };
});
