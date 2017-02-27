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
            var NavigationController = (function () {
                function NavigationController(resourceSvc, localStorageSvc, appLTSvc) {
                    this.resourceSvc = resourceSvc;
                    this.localStorageSvc = localStorageSvc;
                    this.appLTSvc = appLTSvc;
                    this.activate();
                }
                NavigationController.prototype.activate = function () {
                    var self = this;
                    self.language = self.appLTSvc.getApplicationLanguage().Id;
                    self.languageList = self.appLTSvc.getLanguages();
                };
                NavigationController.prototype.setApplicationLanguageInStorage = function (appLanguage) {
                    var self = this;
                    self.localStorageSvc.setItem(new C.KeyValuePair(C.Configuration.LocalStorageKeys.applicationLanguage, appLanguage.toString()));
                };
                NavigationController.prototype.setLanguage = function () {
                    var self = this;
                    //Set the language for the application
                    self.appLTSvc.setApplicationLanguage(self.language);
                    //Make the resource service translate clientside
                    self.resourceSvc.setLanguage(self.appLTSvc.getApplicationLanguage().Code);
                    //Save the language in localstorage
                    self.setApplicationLanguageInStorage(self.language);
                };
                NavigationController.$inject = [C.Resources.ResourceProvider.id, C.Services.LocalStorageService.id, F.ApplicationLifeTimeService.id];
                NavigationController.id = 'navigationController';
                return NavigationController;
            }());
            Controllers.NavigationController = NavigationController;
            HomeSchoolWeb.app.controller(Home.HomeSchoolWeb.Controllers.NavigationController.id, Home.HomeSchoolWeb.Controllers.NavigationController);
        })(Controllers = HomeSchoolWeb.Controllers || (HomeSchoolWeb.Controllers = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
})(Home || (Home = {}));
