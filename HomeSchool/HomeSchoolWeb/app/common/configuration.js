/// <reference path="../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var Common;
    (function (Common) {
        var Configuration;
        (function (Configuration) {
            var AppConfig = (function () {
                function AppConfig() {
                }
                return AppConfig;
            }());
            AppConfig.serviceBaseUrl = 'http://localhost/';
            Configuration.AppConfig = AppConfig;
            var DefaultGridPagerConfig = (function () {
                function DefaultGridPagerConfig() {
                }
                return DefaultGridPagerConfig;
            }());
            DefaultGridPagerConfig.pageSize = 20;
            DefaultGridPagerConfig.pagesToShow = 5;
            Configuration.DefaultGridPagerConfig = DefaultGridPagerConfig;
            var LocalStorageKeys = (function () {
                function LocalStorageKeys() {
                }
                return LocalStorageKeys;
            }());
            LocalStorageKeys.applicationLanguage = 'HomeSchoolWeb.applicationLanguage';
            Configuration.LocalStorageKeys = LocalStorageKeys;
        })(Configuration = Common.Configuration || (Common.Configuration = {}));
    })(Common = Home.Common || (Home.Common = {}));
})(Home || (Home = {}));
//# sourceMappingURL=configuration.js.map