'use strict';

angular.module('contentManagmentApp')
.controller('tabbedPanelsCtrl', tabbedPanelsController)
.directive('tabbedPanels', tabbedPanelsDirective);

function tabbedPanelsController() {
  var ctrl = this;
  ctrl.panels = [];
  // Adds tab to tabs array.
  ctrl.addPanel = function(panel) {
    ctrl.panels.push(panel);

    if (ctrl.panels.length === 1) {
      panel.active = true;
      panel.activeClass = 'active';
    }
  };
  ctrl.select = function(selectedTab) {
    angular.forEach(ctrl.panels, function(panel) {
      if (panel.active && panel !== selectedTab) {
        panel.active = false;
        panel.activeClass = '';
      }
    });
    selectedTab.active = true;
    selectedTab.activeClass = 'active';
  };
}

function tabbedPanelsDirective() {
  return {
    restrict:         'E',
    transclude:       true,
    scope:            {},
    templateUrl:      'templates/ui-components/tabbed-panels.html',
    bindToController: true,
    controllerAs:     'tabbedPanels',
    controller:       'tabbedPanelsCtrl'
  };
}
