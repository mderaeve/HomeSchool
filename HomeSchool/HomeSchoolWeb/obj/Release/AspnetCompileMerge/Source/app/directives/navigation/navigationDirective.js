/// <reference path="../../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Directives;
        (function (Directives) {
            function Navigation() {
                return {
                    templateUrl: 'app/directives/navigation/navigationView.html',
                    restrict: 'E',
                    scope: {},
                    replace: true,
                    controller: Home.HomeSchoolWeb.Controllers.NavigationController.id,
                    controllerAs: 'vm',
                    bindToController: {
                        navigationVisible: '=navVisible'
                    }
                };
            }
            Directives.Navigation = Navigation;
            HomeSchoolWeb.app.directive('navigation', Home.HomeSchoolWeb.Directives.Navigation);
        })(Directives = HomeSchoolWeb.Directives || (HomeSchoolWeb.Directives = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
})(Home || (Home = {}));
//# sourceMappingURL=navigationDirective.js.map