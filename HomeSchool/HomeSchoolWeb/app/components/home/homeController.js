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
        Home.app.controller(Home.Controllers.HomeController.id, Home.Controllers.HomeController);
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
=======
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Controllers;
        (function (Controllers) {
            var C = Home.Common;
            var F = Home.HomeSchoolWeb.Factories;
            var S = Home.HomeSchoolWeb.Services;
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
                return HomeController;
            }());
            HomeController.$inject = ['$state', '$timeout', 'ngToast', C.Resources.ResourceProvider.id, F.ApplicationLifeTimeService.id, S.LogService.id, S.DummyService.id];
            HomeController.id = 'homeController';
            Controllers.HomeController = HomeController;
            HomeSchoolWeb.app.controller(Home.HomeSchoolWeb.Controllers.HomeController.id, Home.HomeSchoolWeb.Controllers.HomeController);
        })(Controllers = HomeSchoolWeb.Controllers || (HomeSchoolWeb.Controllers = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
>>>>>>> 3b3b4f57bc58df1b5a9384175ce2050a2db557f6
})(Home || (Home = {}));
//# sourceMappingURL=homeController.js.map