/// <reference path="../_app.ts" />
'use strict';
var BDO;
(function (BDO) {
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
                LogService.$inject = [];
                LogService.id = "logService";
                return LogService;
            }());
            Services.LogService = LogService;
            HomeSchoolWeb.app.service(BDO.HomeSchoolWeb.Services.LogService.id, BDO.HomeSchoolWeb.Services.LogService);
        })(Services = HomeSchoolWeb.Services || (HomeSchoolWeb.Services = {}));
    })(HomeSchoolWeb = BDO.HomeSchoolWeb || (BDO.HomeSchoolWeb = {}));
})(BDO || (BDO = {}));
//# sourceMappingURL=logService.js.map