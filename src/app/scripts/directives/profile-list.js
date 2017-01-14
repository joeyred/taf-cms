'use strict';

angular.module('contentManagmentApp')
.directive('profileList', function() {
  return {
    templateUrl: 'templates/profile-list.html',
    controller:  'profileListCtrl',
    replace:     true
  };
});
