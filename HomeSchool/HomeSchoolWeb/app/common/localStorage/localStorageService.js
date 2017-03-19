'use strict';
var Home;
(function (Home) {
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
                LocalStorageService.prototype.getItemAny = function (key) {
                    var self = this;
                    var value = '';
                    if (self.$window)
                        value = JSON.parse(self.$window.localStorage.getItem(key));
                    return value;
                };
                LocalStorageService.prototype.setItem = function (pair) {
                    var self = this;
                    if (self.$window)
                        self.$window.localStorage.setItem(pair.key, pair.value);
                };
                LocalStorageService.prototype.setItemAny = function (pair) {
                    var self = this;
                    if (self.$window)
                        self.$window.localStorage.setItem(pair.key, JSON.stringify(pair.value));
                };
                return LocalStorageService;
            }());
            LocalStorageService.$inject = ['$window'];
            LocalStorageService.id = "localStorageService";
            Services.LocalStorageService = LocalStorageService;
            angular.module('home.localstorage', [])
                .service(Home.Common.Services.LocalStorageService.id, Home.Common.Services.LocalStorageService);
        })(Services = Common.Services || (Common.Services = {}));
    })(Common = Home.Common || (Home.Common = {}));
})(Home || (Home = {}));
//# sourceMappingURL=localStorageService.js.map