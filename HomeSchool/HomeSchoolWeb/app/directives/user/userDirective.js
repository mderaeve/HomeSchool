/// <reference path="../../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var Directives;
    (function (Directives) {
        function User() {
            return {
                templateUrl: 'app/directives/user/userView.html',
                restrict: 'E',
                scope: {},
                replace: true,
                controller: Home.Controllers.UserController.id,
                controllerAs: 'vm',
            };
        }
        Directives.User = User;
        Home.app.directive('user', Home.Directives.User);
    })(Directives = Home.Directives || (Home.Directives = {}));
})(Home || (Home = {}));
//# sourceMappingURL=userDirective.js.map