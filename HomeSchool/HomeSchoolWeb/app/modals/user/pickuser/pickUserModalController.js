'use strict';
var Home;
(function (Home) {
    var Controllers;
    (function (Controllers) {
        var C = Home.Common;
        var M = Home.Models;
        var S = Home.Services;
        var PickUserModalController = (function () {
            function PickUserModalController($state, $uibModal, $uibModalInstance, $timeout, resourceSvc, localStorageSvc, userSvc) {
                this.$state = $state;
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
                this.$timeout = $timeout;
                this.resourceSvc = resourceSvc;
                this.localStorageSvc = localStorageSvc;
                this.userSvc = userSvc;
                this.users = null;
            }
            PickUserModalController.prototype.$onInit = function () {
                var self = this;
                self.activate();
            };
            PickUserModalController.prototype.activate = function () {
                var self = this;
                self.users = self.localStorageSvc.getItemAny('users');
                if (self.users == null) {
                    self.users = new Array();
                }
            };
            PickUserModalController.prototype.createUser = function () {
                var self = this;
                var user = new M.UserModel();
                var result = self.users.filter(function (user) { return user.Name == self.userName; });
                if (result.length == 0) {
                    var result_1 = self.users.length == 0 ? 0 : Math.max.apply(Math, self.users.map(function (o) { return o.Id; }));
                    user.Id = result_1 + 1;
                    user.Name = self.userName;
                    user.Rank = 0;
                    self.users.push(user);
                    self.localStorageSvc.setItemAny(new C.KeyValuePair('users', self.users));
                    self.userName = '';
                }
                else {
                }
            };
            PickUserModalController.prototype.selectUser = function (u) {
                var self = this;
                self.userSvc.setUser(u);
            };
            PickUserModalController.prototype.removeUser = function (u) {
                var self = this;
                var index = self.users.indexOf(u, 0);
                if (index > -1) {
                    self.users.splice(index, 1);
                }
                self.localStorageSvc.setItemAny(new C.KeyValuePair('users', self.users));
            };
            PickUserModalController.prototype.onCancel = function () {
                var self = this;
                self.$uibModalInstance.dismiss('close');
            };
            return PickUserModalController;
        }());
        PickUserModalController.id = 'pickUserModalController';
        PickUserModalController.$inject = [
            '$state',
            '$uibModal',
            '$uibModalInstance',
            '$timeout',
            C.Resources.ResourceProvider.id,
            C.Services.LocalStorageService.id,
            S.UserService.id
        ];
        Controllers.PickUserModalController = PickUserModalController;
        Home.app.controller(Home.Controllers.PickUserModalController.id, Home.Controllers.PickUserModalController);
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
})(Home || (Home = {}));
//# sourceMappingURL=pickUserModalController.js.map