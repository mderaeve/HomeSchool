'use strict';
var Home;
(function (Home) {
    var Controllers;
    (function (Controllers) {
        var C = Home.Common;
        var S = Home.Services;
        var SettingsModalController = (function () {
            function SettingsModalController($state, $uibModal, $uibModalInstance, $timeout, resourceSvc, localStorageSvc, userSvc) {
                this.$state = $state;
                this.$uibModal = $uibModal;
                this.$uibModalInstance = $uibModalInstance;
                this.$timeout = $timeout;
                this.resourceSvc = resourceSvc;
                this.localStorageSvc = localStorageSvc;
                this.userSvc = userSvc;
                this.storageValidDate = new Date();
            }
            SettingsModalController.prototype.$onInit = function () {
                var self = this;
            };
            SettingsModalController.prototype.onCancel = function () {
                var self = this;
                self.$uibModalInstance.dismiss('close');
            };
            SettingsModalController.prototype.selectAvater = function () {
                var self = this;
                self.userSvc.getUser().Avater++;
                if (self.userSvc.getUser().Avater > 9)
                    self.userSvc.getUser().Avater = 0;
                self.userSvc.saveUser();
            };
            SettingsModalController.prototype.getImageUrlForAvatar = function () {
                var self = this;
                var url = 'p' + String(self.userSvc.getUser().Avater) + '.jpg';
                return url;
            };
            SettingsModalController.prototype.getImageUrlForRank = function () {
                return "r0.jpg";
            };
            return SettingsModalController;
        }());
        SettingsModalController.id = 'settingsModalController';
        SettingsModalController.$inject = [
            '$state',
            '$uibModal',
            '$uibModalInstance',
            '$timeout',
            C.Resources.ResourceProvider.id,
            C.Services.LocalStorageService.id,
            S.UserService.id
        ];
        Controllers.SettingsModalController = SettingsModalController;
        Home.app.controller(Home.Controllers.SettingsModalController.id, Home.Controllers.SettingsModalController);
    })(Controllers = Home.Controllers || (Home.Controllers = {}));
})(Home || (Home = {}));
//# sourceMappingURL=settingsModalController.js.map