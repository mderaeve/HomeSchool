/// <reference path="../../../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var Directives;
    (function (Directives) {
        function HundredFieldLine() {
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
            };
        }
        Directives.HundredFieldLine = HundredFieldLine;
        Home.app.directive('hundredfieldline', Home.Directives.HundredFieldLine);
    })(Directives = Home.Directives || (Home.Directives = {}));
})(Home || (Home = {}));
//# sourceMappingURL=hundredFieldLineDirective.js.map