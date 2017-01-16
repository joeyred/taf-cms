'use strict';

angular.module('contentManagmentApp')
.controller('accordionPanelsCtrl', accordionPanelsController)
.directive('accordionPanels', accordionPanelsDirective)
.directive('accordionPanel', accordionPanelDirective);

function accordionPanelsController() {
  var ctrl = this;
  ctrl.panels = [];

  ctrl.addPanel = function(panel) {
    ctrl.panels.push(panel);
  };
  ctrl.select = function(selectedItem) {
    selectedItem.active = !selectedItem.active;
  };
}

function accordionPanelsDirective() {
  return {
    restrict:         'E',
    transclude:       true,
    replace:          true,
    scope:            {},
    templateUrl:      'templates/ui-components/accordion/accordion-panels.html',
    bindToController: true,
    controllerAs:     'accordionPanels',
    controller:       'accordionPanelsCtrl'
  };
}

function accordionPanelDirective() {
  return {
    restrict:   'E', // specifies the directive is an element.
    transclude: {
      heading:   'accordionHeading',
      headingUi: 'accordionHeadingUi'
    },
    replace:     true,
    templateUrl: 'templates/ui-components/accordion/accordion-panel.html',
    require:     '^accordionPanels',
    scope:       {},
    /**
     * Specifies linking function. This operates similar to a controller.
     *
     * @method link
     *
     * @param  {object} scope - Values available for use in directives templates.
     * @param  {object} elem  - HTML element that can be used to manipulate the DOM.
     * @param  {object} attr  - A normalized object of all the HTML properties attached
     *                          to the directive HTML element.
     */
    link: function(scope, elem, attr, accordionPanelsCtrl) {
      scope.active = false;
      accordionPanelsCtrl.addPanel(scope);
    }
  };
}
