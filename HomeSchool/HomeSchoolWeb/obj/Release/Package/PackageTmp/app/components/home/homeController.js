/// <reference path="../../_app.ts" />
'use strict';
var BDO;
(function (BDO) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Controllers;
        (function (Controllers) {
            var C = BDO.Common;
            var F = BDO.HomeSchoolWeb.Factories;
            var S = BDO.HomeSchoolWeb.Services;
            var HomeController = (function () {
                function HomeController($state, $timeout, ngToast, resourceSvc, appLTSvc, logSvc, dummySvc) {
                    this.$state = $state;
                    this.$timeout = $timeout;
                    this.ngToast = ngToast;
                    this.resourceSvc = resourceSvc;
                    this.appLTSvc = appLTSvc;
                    this.logSvc = logSvc;
                    this.dummySvc = dummySvc;
                    this.pageSize = C.Configuration.DefaultGridPagerConfig.pageSize;
                    this.pagesToShow = C.Configuration.DefaultGridPagerConfig.pagesToShow;
                    this.activate();
                }
                HomeController.prototype.activate = function () {
                    var self = this;
                    ////Test Toast
                    //self.ngToast.create({
                    //    className: "success",
                    //    content: `<span>${self.resourceSvc.getLocalResource('Home.helloWorld')}</span>`
                    //});
                };
                HomeController.$inject = ['$state', '$timeout', 'ngToast', C.Resources.ResourceProvider.id, F.ApplicationLifeTimeService.id, S.LogService.id, S.DummyService.id];
                HomeController.id = 'homeController';
                return HomeController;
            }());
            Controllers.HomeController = HomeController;
            HomeSchoolWeb.app.controller(BDO.HomeSchoolWeb.Controllers.HomeController.id, BDO.HomeSchoolWeb.Controllers.HomeController);
        })(Controllers = HomeSchoolWeb.Controllers || (HomeSchoolWeb.Controllers = {}));
    })(HomeSchoolWeb = BDO.HomeSchoolWeb || (BDO.HomeSchoolWeb = {}));
})(BDO || (BDO = {}));
//# sourceMappingURL=homeController.js.map