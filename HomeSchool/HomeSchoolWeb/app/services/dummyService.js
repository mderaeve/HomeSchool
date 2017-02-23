/// <reference path="../_app.ts" />
'use strict';
var BDO;
(function (BDO) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Services;
        (function (Services) {
            var C = BDO.Common;
            var M = BDO.HomeSchoolWeb.Models;
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
                DummyService.$inject = ['$http', '$filter', 'logService'];
                DummyService.id = "dummyService";
                return DummyService;
            }());
            Services.DummyService = DummyService;
            HomeSchoolWeb.app.service(BDO.HomeSchoolWeb.Services.DummyService.id, BDO.HomeSchoolWeb.Services.DummyService);
        })(Services = HomeSchoolWeb.Services || (HomeSchoolWeb.Services = {}));
    })(HomeSchoolWeb = BDO.HomeSchoolWeb || (BDO.HomeSchoolWeb = {}));
})(BDO || (BDO = {}));
//# sourceMappingURL=dummyService.js.map