'use strict';

angular.module('contentManagmentApp')
.controller('editorCtrl', function($scope) {
  $scope.person = $scope.currentProfile;

  $scope.addFact = function(currentProfile) {
    var fact = {};
    currentProfile.facts.push(fact);
  };
  $scope.addSource = function(fact) {
    var source = {title: 'New Source'};
    // This lets us make new stuff if there isnt stuff to begin with. stuff.
    if (fact.sources === undefined || fact.sources === null) {
      fact.sources = [];
    }
    fact.sources.push(source);
  };
});
