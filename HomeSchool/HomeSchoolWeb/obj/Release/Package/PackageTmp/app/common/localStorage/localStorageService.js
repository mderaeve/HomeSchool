'use strict';
var BDO;
(function (BDO) {
    var Common;
    (function (Common) {
        var Services;
        (function (Services) {
            var LocalStorageService = (function () {
                function LocalStorageService($window) {
                    this.$window = $window;
                }
                LocalStorageService.prototype.getItem = function (key) {
                    var self = this;
                    var value = '';
                    if (self.$window)
                        value = self.$window.localStorage.getItem(key);
                    return value;
                };
                LocalStorageService.prototype.setItem = function (pair) {
                    var self = this;
                    if (self.$window)
                        self.$window.localStorage.setItem(pair.key, pair.value);
                };
                LocalStorageService.$inject = ['$window'];
                LocalStorageService.id = "localStorageService";
                return LocalStorageService;
            }());
            Services.LocalStorageService = LocalStorageService;
            angular.module('bdo.localstorage', [])
                .service(BDO.Common.Services.LocalStorageService.id, BDO.Common.Services.LocalStorageService);
        })(Services = Common.Services || (Common.Services = {}));
    })(Common = BDO.Common || (BDO.Common = {}));
})(BDO || (BDO = {}));
//# sourceMappingURL=localStorageService.js.map