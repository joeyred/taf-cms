'use strict';

angular.module('contentManagmentApp')
.directive('welcome', function() {
  return {
    templateUrl: 'templates/welcome.html',
    controller:  'mainCtrl'
  };
});
