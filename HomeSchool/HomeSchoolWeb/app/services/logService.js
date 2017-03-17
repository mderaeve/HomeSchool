/// <reference path="../_app.ts" />
'use strict';
var Home;
(function (Home) {
<<<<<<< HEAD
    var Services;
    (function (Services) {
        var LogService = (function () {
            function LogService() {
            }
            LogService.prototype.log = function (msg) {
                console.log(msg);
            };
            LogService.$inject = [];
            LogService.id = "logService";
            return LogService;
        }());
        Services.LogService = LogService;
        Home.app.service(Home.Services.LogService.id, Home.Services.LogService);
    })(Services = Home.Services || (Home.Services = {}));
=======
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
>>>>>>> 3b3b4f57bc58df1b5a9384175ce2050a2db557f6
})(Home || (Home = {}));
//# sourceMappingURL=logService.js.map