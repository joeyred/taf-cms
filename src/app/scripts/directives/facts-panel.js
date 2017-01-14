'use strict';

angular.module('contentManagmentApp')
.directive('factsPanel', function() {
  return {
    templateUrl: 'templates/facts-panel.html',
    controller:  'editorCtrl'
  };
});
