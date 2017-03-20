/// <reference path="../_app.ts" />
'use strict';
var Home;
(function (Home) {
    var Services;
    (function (Services) {
        var C = Home.Common;
        var UserService = (function () {
            function UserService($http, $filter, logService, localStorageSvc) {
                this.$http = $http;
                this.$filter = $filter;
                this.logService = logService;
                this.localStorageSvc = localStorageSvc;
                this.activate();
            }
            UserService.prototype.activate = function () {
                var self = this;
            };
            UserService.prototype.setUser = function (user) {
                var self = this;
                self.logService.log('Setting user');
                self.loggedInUser = user;
                self.localStorageSvc.setItemAny(new C.KeyValuePair('loggedInUser', user));
            };
            UserService.prototype.saveUser = function () {
                var self = this;
                self.localStorageSvc.setItemAny(new C.KeyValuePair('loggedInUser', self.loggedInUser));
            };
            UserService.prototype.getUser = function () {
                var self = this;
                if (self.loggedInUser == null) {
                    var user = self.localStorageSvc.getItemAny('loggedInUser');
                    if (user != null) {
                        self.loggedInUser = user;
                        return self.loggedInUser;
                    }
                }
                return self.loggedInUser;
            };
            return UserService;
        }());
        UserService.$inject = ['$http', '$filter', 'logService', C.Services.LocalStorageService.id];
        UserService.id = "userService";
        Services.UserService = UserService;
        Home.app.service(Home.Services.UserService.id, Home.Services.UserService);
    })(Services = Home.Services || (Home.Services = {}));
})(Home || (Home = {}));
//# sourceMappingURL=userService.js.map