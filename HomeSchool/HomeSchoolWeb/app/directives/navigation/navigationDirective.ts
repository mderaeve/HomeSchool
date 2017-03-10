/// <reference path="../../_app.ts" />
'use strict';

module Home.Directives {
    export function Navigation(): ng.IDirective {
        return {
            templateUrl: 'app/directives/navigation/navigationView.html',
            restrict: 'E',
            scope: {},
            replace: true,
            controller: Home.Controllers.NavigationController.id,
            controllerAs: 'vm',
            bindToController: {
                navigationVisible: '=navVisible'
            }
        }
    }
    app.directive('navigation', Home.Directives.Navigation);
}
