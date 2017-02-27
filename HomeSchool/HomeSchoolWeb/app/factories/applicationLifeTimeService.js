/// <reference path="../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Factories;
        (function (Factories) {
            var C = Home.Common;
            var S = Home.HomeSchoolWeb.Services;
            var ApplicationLifeTimeService = (function () {
                function ApplicationLifeTimeService($filter, logSvc) {
                    this.$filter = $filter;
                    this.logSvc = logSvc;
                    this.languageList = new C.List([
                        { Id: 1, Code: 'nl', DisplayText: 'Nederlands' },
                        { Id: 4, Code: 'en', DisplayText: 'English' }
                    ]);
                    this.init();
                }
                ApplicationLifeTimeService.prototype.init = function () {
                    var self = this;
                };
                ApplicationLifeTimeService.prototype.getApplicationLanguage = function () {
                    var self = this;
                    return self.applicationLanguage;
                };
                ApplicationLifeTimeService.prototype.getLanguages = function () {
                    var self = this;
                    return self.languageList;
                };
                ApplicationLifeTimeService.prototype.setApplicationLanguage = function (languageId) {
                    var self = this;
                    var expression = { Id: languageId };
                    var filterRslt = self.languageList.find(self.$filter, expression);
                    if (filterRslt != null && filterRslt.length > 0)
                        self.applicationLanguage = filterRslt[0];
                    else
                        self.applicationLanguage = self.languageList[0];
                };
                ApplicationLifeTimeService.ApplicationLifeTimeFactory = function ($filter, logService) {
                    return new ApplicationLifeTimeService($filter, logService);
                };
                ApplicationLifeTimeService.$inject = ['$filter', S.LogService.id];
                ApplicationLifeTimeService.id = 'applicationLifeTimeService';
                return ApplicationLifeTimeService;
            }());
            Factories.ApplicationLifeTimeService = ApplicationLifeTimeService;
            HomeSchoolWeb.app.factory(Home.HomeSchoolWeb.Factories.ApplicationLifeTimeService.id, ['$filter', S.LogService.id, Home.HomeSchoolWeb.Factories.ApplicationLifeTimeService.ApplicationLifeTimeFactory]);
        })(Factories = HomeSchoolWeb.Factories || (HomeSchoolWeb.Factories = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
})(Home || (Home = {}));
