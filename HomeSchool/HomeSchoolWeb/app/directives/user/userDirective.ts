/// <reference path="../../_app.ts" />
'use strict';

module Home.Directives {
    export function User(): ng.IDirective {
        return {
            templateUrl: 'app/directives/user/userView.html',
            restrict: 'E',
            scope: {},
            replace: true,
            controller: Home.Controllers.UserController.id,
            controllerAs: 'vm',
        }
    }

    app.directive('user', Home.Directives.User);
}
