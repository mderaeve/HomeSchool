/// <reference path="../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var HomeSchoolWeb;
    (function (HomeSchoolWeb) {
        var Services;
        (function (Services) {
            var LogService = (function () {
                function LogService() {
                }
                LogService.prototype.log = function (msg) {
                    console.log(msg);
                };
                return LogService;
            }());
            LogService.$inject = [];
            LogService.id = "logService";
            Services.LogService = LogService;
            HomeSchoolWeb.app.service(Home.HomeSchoolWeb.Services.LogService.id, Home.HomeSchoolWeb.Services.LogService);
        })(Services = HomeSchoolWeb.Services || (HomeSchoolWeb.Services = {}));
    })(HomeSchoolWeb = Home.HomeSchoolWeb || (Home.HomeSchoolWeb = {}));
})(Home || (Home = {}));
//# sourceMappingURL=logService.js.map