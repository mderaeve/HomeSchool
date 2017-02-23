/// <reference path="../_app.ts" />
'use strict';
var BDO;
(function (BDO) {
    var Common;
    (function (Common) {
        var Configuration;
        (function (Configuration) {
            var AppConfig = (function () {
                function AppConfig() {
                }
                AppConfig.serviceBaseUrl = 'http://localhost/';
                return AppConfig;
            }());
            Configuration.AppConfig = AppConfig;
            var DefaultGridPagerConfig = (function () {
                function DefaultGridPagerConfig() {
                }
                DefaultGridPagerConfig.pageSize = 20;
                DefaultGridPagerConfig.pagesToShow = 5;
                return DefaultGridPagerConfig;
            }());
            Configuration.DefaultGridPagerConfig = DefaultGridPagerConfig;
            var LocalStorageKeys = (function () {
                function LocalStorageKeys() {
                }
                LocalStorageKeys.applicationLanguage = 'HomeSchoolWeb.applicationLanguage';
                return LocalStorageKeys;
            }());
            Configuration.LocalStorageKeys = LocalStorageKeys;
        })(Configuration = Common.Configuration || (Common.Configuration = {}));
    })(Common = BDO.Common || (BDO.Common = {}));
})(BDO || (BDO = {}));
//# sourceMappingURL=configuration.js.map