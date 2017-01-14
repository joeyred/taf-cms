'use strict';

angular.module('contentManagmentApp')
.directive('editor', function() {
  return {
    templateUrl: 'templates/editor.html',
    controller:  'mainCtrl'
  };
});
