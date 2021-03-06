/// <reference path="../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var Services;
    (function (Services) {
        var C = Home.Common;
        var M = Home.Models;
        var DummyService = (function () {
            function DummyService($http, $filter, logService) {
                this.$http = $http;
                this.$filter = $filter;
                this.logSvc = logService;
                this.activate();
            }
            DummyService.prototype.activate = function () {
                var self = this;
            };
            DummyService.prototype.apiGetSample = function () {
                var self = this;
                self.logSvc.log('Calling apiGet');
                var defer = Q.defer();
                var serviceUrl = C.Configuration.AppConfig.serviceBaseUrl + "apigetsample";
                self.$http.get(serviceUrl)
                    .success(function (data, status, headers, config) {
                    defer.resolve(data);
                })
                    .error(function (data, status, headers, config) {
                    self.logSvc.log(data);
                    defer.reject(new M.RejectMessage({ Message: data }));
                });
                return defer.promise;
            };
            return DummyService;
        }());
        DummyService.$inject = ['$http', '$filter', 'logService'];
        DummyService.id = "dummyService";
        Services.DummyService = DummyService;
        Home.app.service(Home.Services.DummyService.id, Home.Services.DummyService);
    })(Services = Home.Services || (Home.Services = {}));
})(Home || (Home = {}));
//# sourceMappingURL=dummyService.js.map