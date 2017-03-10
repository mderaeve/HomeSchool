/// <reference path="../_app.ts" />
'use strict';
var Home;
(function (Home) {
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
})(Home || (Home = {}));
//# sourceMappingURL=logService.js.map