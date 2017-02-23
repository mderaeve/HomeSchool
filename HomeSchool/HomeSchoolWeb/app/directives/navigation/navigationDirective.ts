/// <reference path="../../_app.ts" />
'use strict';

module BDO.HomeSchoolWeb.Directives {
    export function Navigation(): ng.IDirective {
        return {
            templateUrl: 'app/directives/navigation/navigationView.html',
            restrict: 'E',
            scope: {},
            replace: true,
            controller: BDO.HomeSchoolWeb.Controllers.NavigationController.id,
            controllerAs: 'vm',
            bindToController: {
                navigationVisible: '=navVisible'
            }
        }
    }
    app.directive('navigation', BDO.HomeSchoolWeb.Directives.Navigation);
}
