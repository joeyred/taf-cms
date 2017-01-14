'use strict';

angular.module('contentManagmentApp')
.directive('basicInfoPanel', function() {
  return {
    templateUrl: 'templates/basic-info-panel.html',
    controller:  'editorCtrl'
  };
});
