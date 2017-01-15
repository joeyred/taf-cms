'use strict';

angular.module('contentManagmentApp')
.controller('profileListCtrl', function($scope) {
  var ctrl = this;
  ctrl.active = false;
  ctrl.profiles = $scope.people;

  $scope.selectProfile = function(person) {
    $scope.currentProfile = person;
    // ctrl.selectedProfile = person;
    // angular.forEach(ctrl.profiles, function(profile) {
    //   if (profile !== ctrl.selectedProfile) {
    //     profile.active = false;
    //     profile.activeClass = '';
    //   }
    // });
    // ctrl.selectedProfile.active = true;
    // ctrl.selectedProfile.activeClass = 'active';
  };
});
