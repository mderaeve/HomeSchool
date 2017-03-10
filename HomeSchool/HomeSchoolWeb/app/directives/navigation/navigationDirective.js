/// <reference path="../../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var Directives;
    (function (Directives) {
        function Navigation() {
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
            };
        }
        Directives.Navigation = Navigation;
        Home.app.directive('navigation', Home.Directives.Navigation);
    })(Directives = Home.Directives || (Home.Directives = {}));
})(Home || (Home = {}));
//# sourceMappingURL=navigationDirective.js.map