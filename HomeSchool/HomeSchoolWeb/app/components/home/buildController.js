/// <reference path="../../_app.ts" />
'use strict';
var Home;
(function (Home) {
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
                BuildController.$inject = ['$state', '$timeout', 'ngToast', C.Resources.ResourceProvider.id, F.ApplicationLifeTimeService.id, S.LogService.id];
                BuildController.id = 'homeController';
                return BuildController;
            }());
            Controllers.BuildController = BuildController;
            HomeSchoolWeb.app.controller(Home.HomeSchoolWeb.Controllers.BuildController.id, Home.HomeSchoolWeb.Controllers.BuildController);
        })(Controllers = HomeSchoolWeb.Controllers || (HomeSchoolWeb.Controllers = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
})(Home || (Home = {}));
