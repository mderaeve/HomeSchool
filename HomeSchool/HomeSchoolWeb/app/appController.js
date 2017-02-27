/// <reference path="_app.ts" />
'use strict';
var Home;
(function (Home) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Controllers;
        (function (Controllers) {
            var C = Home.Common;
            var F = Home.HomeSchoolWeb.Factories;
            var AppController = (function () {
                function AppController($stateParams, resourceSvc, localStorageSvc, appLTSvc) {
                    this.$stateParams = $stateParams;
                    this.resourceSvc = resourceSvc;
                    this.localStorageSvc = localStorageSvc;
                    this.appLTSvc = appLTSvc;
                    this.navigationVisible = true;
                    this.activate();
                }
                AppController.prototype.getApplicationLanguageFromStorage = function () {
                    var self = this;
                    var applicationLanguage = -1;
                    var tmpStorageValue = self.localStorageSvc.getItem(C.Configuration.LocalStorageKeys.applicationLanguage);
                    if (tmpStorageValue != null && tmpStorageValue !== '')
                        applicationLanguage = parseInt(tmpStorageValue);
                    return applicationLanguage;
                };
                AppController.prototype.activate = function () {
                    var self = this;
                    var storageAppLang = self.getApplicationLanguageFromStorage();
                    if (storageAppLang != -1)
                        self.appLTSvc.setApplicationLanguage(storageAppLang);
                    else
                        self.appLTSvc.setApplicationLanguage(4); //4 = english   
                    self.resourceSvc.setLanguage(self.appLTSvc.getApplicationLanguage().Code);
                    if (self.$stateParams.nav != '') {
                        var navParam = self.$stateParams.nav;
                        if (navParam === '0')
                            self.navigationVisible = false;
                    }
                };
                AppController.$inject = ['$stateParams', C.Resources.ResourceProvider.id, C.Services.LocalStorageService.id, F.ApplicationLifeTimeService.id];
                AppController.id = 'appController';
                return AppController;
            }());
            Controllers.AppController = AppController;
            HomeSchoolWeb.app.controller(Home.HomeSchoolWeb.Controllers.AppController.id, Home.HomeSchoolWeb.Controllers.AppController);
        })(Controllers = HomeSchoolWeb.Controllers || (HomeSchoolWeb.Controllers = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
})(Home || (Home = {}));
