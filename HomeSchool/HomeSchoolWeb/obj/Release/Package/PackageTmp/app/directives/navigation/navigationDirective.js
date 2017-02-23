/// <reference path="../../_app.ts" />
'use strict';
var BDO;
(function (BDO) {
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
                    controller: BDO.HomeSchoolWeb.Controllers.NavigationController.id,
                    controllerAs: 'vm',
                    bindToController: {
                        navigationVisible: '=navVisible'
                    }
                };
            }
            Directives.Navigation = Navigation;
            HomeSchoolWeb.app.directive('navigation', BDO.HomeSchoolWeb.Directives.Navigation);
        })(Directives = HomeSchoolWeb.Directives || (HomeSchoolWeb.Directives = {}));
    })(HomeSchoolWeb = BDO.HomeSchoolWeb || (BDO.HomeSchoolWeb = {}));
})(BDO || (BDO = {}));
//# sourceMappingURL=navigationDirective.js.map