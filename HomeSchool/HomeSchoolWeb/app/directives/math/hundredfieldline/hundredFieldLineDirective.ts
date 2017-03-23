/// <reference path="../../../_app.ts" />
'use strict';

module Home.Directives {
    export function HundredFieldLine(): ng.IDirective {
        return {
            templateUrl: 'app/directives/math/hundredfieldline/hundredFieldLineView.html',
            restrict: 'E',
            replace: true,
            controller: Home.Controllers.HundredFieldLineController.id,
            controllerAs: 'vm',
            bindToController: {
                lineStart: '=start',
                lineStop: '=stop'
            }
        }
    }
    app.directive('hundredfieldline', Home.Directives.HundredFieldLine);
}
