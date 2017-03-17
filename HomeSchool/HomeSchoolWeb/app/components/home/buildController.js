/// <reference path="../../_app.ts" />
'use strict';
var Home;
(function (Home) {
<<<<<<< HEAD
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
            BuildController.$inject = ['$state', '$timeout', 'ngToast', C.Resources.ResourceProvider.id, F.ApplicationLifeTimeService.id, S.LogService.id];
            BuildController.id = 'homeController';
            return BuildController;
        }());
        Controllers.BuildController = BuildController;
        Home.app.controller(Home.Controllers.BuildController.id, Home.Controllers.BuildController);
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
=======
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Controllers;
        (function (Controllers) {
            var C = Home.Common;
            var F = Home.HomeSchoolWeb.Factories;
            var S = Home.HomeSchoolWeb.Services;
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
            HomeSchoolWeb.app.controller(Home.HomeSchoolWeb.Controllers.BuildController.id, Home.HomeSchoolWeb.Controllers.BuildController);
        })(Controllers = HomeSchoolWeb.Controllers || (HomeSchoolWeb.Controllers = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
>>>>>>> 3b3b4f57bc58df1b5a9384175ce2050a2db557f6
})(Home || (Home = {}));
//# sourceMappingURL=buildController.js.map