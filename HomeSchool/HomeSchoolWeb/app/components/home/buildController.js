/// <reference path="../../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var Controllers;
    (function (Controllers) {
        var C = Home.Common;
        var F = Home.Factories;
        var S = Home.Services;
        var BuildController = (function () {
            function BuildController($state, $timeout, ngToast, resourceSvc, appLTSvc, logSvc, dummySvc) {
                this.$state = $state;
                this.$timeout = $timeout;
                this.ngToast = ngToast;
                this.resourceSvc = resourceSvc;
                this.appLTSvc = appLTSvc;
                this.logSvc = logSvc;
                this.dummySvc = dummySvc;
                this.activate();
            }
            BuildController.prototype.activate = function () {
                var self = this;
            };
            return BuildController;
        }());
        BuildController.$inject = ['$state', '$timeout', 'ngToast', C.Resources.ResourceProvider.id, F.ApplicationLifeTimeService.id, S.LogService.id];
        BuildController.id = 'homeController';
        Controllers.BuildController = BuildController;
        Home.app.controller(Home.Controllers.BuildController.id, Home.Controllers.BuildController);
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
})(Home || (Home = {}));
//# sourceMappingURL=buildController.js.map