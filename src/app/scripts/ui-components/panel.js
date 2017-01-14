'use strict';

angular.module('contentManagmentApp')
.directive('tabbedPanel', tabPanelDirective);

function tabPanelDirective() {
  return {
    restrict:    'E', // specifies the directive is an element.
    transclude:  true, // Insert content inside directive element.
    replace:     true,
    templateUrl: 'templates/ui-components/tab-panel.html',
    require:     '^tabbedPanels',
    scope:       {
      heading: '@'
    },
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
    link: function(scope, elem, attr, tabbedPanelsCtrl) {
      scope.active = false;
      tabbedPanelsCtrl.addPanel(scope);
    }
  };
}
